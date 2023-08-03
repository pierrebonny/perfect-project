import { Subject, Observable, of, combineLatest, BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, map, startWith, tap } from 'rxjs/operators';
import { Media } from 'src/app/types';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';
import { MainPageLayoutComponent } from 'src/app/components/main-page-layout/main-page-layout.component';

@Component({
  selector: 'app-media-research-page',
  templateUrl: './media-research-page.component.html',
  styleUrls: ['./media-research-page.component.scss']
})

export class MediaResearchPageComponent implements OnInit {

  @ViewChild(MainPageLayoutComponent) layoutComponent: MainPageLayoutComponent;

  // research bar model
  public mediaResearchUpdate = new Subject<string>();

  private mediaResearch: string;

  public mediasList$: Observable<Media[]>;

  private currentPage = 1;
  public totalPages: number;
  public totalResults: number;

  private changePage$ = new Subject<number>();
  public changeType$ = new BehaviorSubject<string>('movie');

  constructor(private tmdbService: TmdbService) {}

  public ngOnInit() {
    this.mediasList$ = combineLatest([
        this.mediaResearchUpdate.pipe(
          debounceTime(500),
          distinctUntilChanged(),
          tap((mediaResearch) => {
            this.mediaResearch = mediaResearch;
          })
        ),
        this.changeType$,
      ]).pipe(
        switchMap(([_, type]) => {
          this.layoutComponent.reset();
          return this.updateMediasListPage(type);
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

  public updateMediasListPage(type: string): Observable<Media[]> {
    return this.changePage$
      .pipe(
        startWith(1),
        switchMap((currentPage) => this.filterMediasByUserEntry(currentPage, type))
      );
  }

  /**
   * filtering all current page medias by keeping only ones starting by user entry string
   */
  private filterMediasByUserEntry(currentPage: number, type: string): Observable<Media[]> {
    if (!(this.mediaResearch && this.mediaResearch.length)) {
      this.totalPages = 0;
      this.totalResults = 0;
      return of([]);
    }

    return this.tmdbService.getMediasByName(this.mediaResearch, type, currentPage)
      .pipe(
        map(medias => {
          this.totalPages = medias.total_pages;
          this.totalResults = medias.total_results;
          return medias.results;
        })
      );
  }
}
