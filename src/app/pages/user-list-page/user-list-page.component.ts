import { Subject, BehaviorSubject, Observable, combineLatest, of, merge } from 'rxjs';
import { switchMap, pluck, tap, map, startWith } from 'rxjs/operators';
import { Media } from 'src/app/types';
import { Component, ViewChild } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localstorage/localStorage.service';
import { MainPageLayoutComponent } from 'src/app/components/main-page-layout/main-page-layout.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.scss']
})

export class UserListPageComponent {

  @ViewChild(MainPageLayoutComponent, { static: false }) layoutComponent: MainPageLayoutComponent;

  private mediasList$: Observable<Media[]>;
  public currentMediasList$: Observable<Media[]>;

  private currentPage = 1;
  public totalPages = 0;
  public currentListName: string;

  // change this var to extend pages
  private readonly pagesSize = 20;

  private changePage$ = new Subject<number>();
  public changeType$ = new BehaviorSubject<string>('movie');

  constructor(private localStorageService: LocalStorageService, private route: ActivatedRoute) {

    const listName$ = merge(
      this.route.data.pipe(pluck('listName')),
      this.localStorageService.localStorageNotifier.pipe(pluck('listName'))
    );
    this.mediasList$ = combineLatest([listName$, this.changeType$]).pipe(
      switchMap(([listName, type]) => {
        if (!this.currentListName) {
          this.currentListName = listName;
        } else if (this.currentListName !== listName) {
          return;
        }
        this.currentListName = listName;
        return of(this.localStorageService.getListAndFilterByMediaType(listName, type));
      })
    );
    this.currentMediasList$ = combineLatest([
      this.changePage$.pipe(startWith(1)),
      this.mediasList$
    ]).pipe(
        switchMap(([page, mediasList]) => {
          this.totalPages = Math.trunc(mediasList.length / this.pagesSize)  + ((mediasList.length % this.pagesSize) > 0 ? 1 : 0);
          return of(mediasList.slice(
            (page - 1) * this.pagesSize,
            Math.min(((page - 1) * this.pagesSize) + this.pagesSize, mediasList.length)
          ));
        }),
      );
  }

  /**
   * on click on paginator get next or previous page from TMDB
   */
  public changePage(currentPageIndex: number) {
    this.currentPage = currentPageIndex;
    this.changePage$.next(currentPageIndex);
  }

  public changeType(type: string) {
    this.currentPage = 1;
    this.changeType$.next(type);
  }
}
