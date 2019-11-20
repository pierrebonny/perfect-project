import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { switchMap, map, startWith, shareReplay } from 'rxjs/operators';
import { Media } from 'src/app/types';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';
import { MainPageLayoutComponent } from 'src/app/components/main-page-layout/main-page-layout.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements AfterViewInit {

  @ViewChild(MainPageLayoutComponent, { static: false }) layoutComponent: MainPageLayoutComponent;

  public mediasList$: Observable<Media[]>;

  private currentPage = 1;
  public totalPages = 0;
  public hookMedia: Media;

  private changePage$ = new Subject<number>();
  public changeType$ = new BehaviorSubject<string>('movie');

  constructor(private tmdbService: TmdbService) {}

  public ngAfterViewInit() {
    this.mediasList$ = this.changeType$
      .pipe(
        switchMap((type) => {
          if (this.layoutComponent) { this.layoutComponent.reset(); }
          return this.updateMediasListPage(type);
        }),
        shareReplay(1)
      );
    this.getTrendingMedias(1, 'movie');
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

  public updateMediasListPage(type: string): Observable<Media[]> {
    return this.changePage$
      .pipe(
        startWith(1),
        switchMap((currentPage) => this.getTrendingMedias(currentPage, type))
      );
  }

  /**
   * getting trending medias list by type and page
   */
  private getTrendingMedias(currentPage: number, type: string): Observable<Media[]> {
    return this.tmdbService.getTrendingMedias(type, currentPage)
      .pipe(
        map(medias => {
          this.totalPages = medias.total_pages;
          if (currentPage === 1) {
            this.hookMedia = medias.results[0];
          }
          return medias.results;
        })
      );
  }
}
