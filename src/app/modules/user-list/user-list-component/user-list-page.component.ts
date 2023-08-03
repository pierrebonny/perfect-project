import { Subject, BehaviorSubject, Observable, combineLatest, merge, of } from 'rxjs';
import { pluck, tap, map, startWith, distinctUntilChanged, filter } from 'rxjs/operators';
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

  @ViewChild(MainPageLayoutComponent) layoutComponent: MainPageLayoutComponent;

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

    const listName$ = this.route.data.pipe(
      pluck('listName'),
      distinctUntilChanged(),
      tap(listName => this.currentListName = listName),
    );

    const listChange$ = this.localStorageService.localStorageNotifier.pipe(
      pluck('listName'),
      filter(listName => listName === this.currentListName)
    );

    const mediaChange$ = merge(listName$, listChange$);

    this.mediasList$ = combineLatest([this.changeType$, mediaChange$]).pipe(
      map(([type]) => this.localStorageService.getListAndFilterByMediaType(this.currentListName, type))
    );

    this.currentMediasList$ = combineLatest([
      this.changePage$.pipe(startWith(1)),
      this.mediasList$,
    ]).pipe(
        map(([page, mediasList]) => {
          this.totalPages = Math.trunc(mediasList.length / this.pagesSize)  + ((mediasList.length % this.pagesSize) > 0 ? 1 : 0);
          return mediasList.slice(
            (page - 1) * this.pagesSize,
            Math.min(((page - 1) * this.pagesSize) + this.pagesSize, mediasList.length)
          );
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

  public getCurrentPage() {
    return this.currentPage;
  }
}
