import { Subject, Observable, of, combineLatest, BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, map, tap, startWith } from 'rxjs/operators';
import { Media } from 'src/app/types';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TmdbService } from 'src/app/services/tmdb.service';
import { MainPageLayoutComponent } from 'src/app/components/main-page-layout/main-page-layout.component';

@Component({
  selector: 'app-media-research-page',
  templateUrl: './media-research-page.component.html',
  styleUrls: ['./media-research-page.component.css']
})

export class MediaResearchPageComponent implements OnInit {

  @ViewChild(MainPageLayoutComponent, { static: false }) layoutComponent: MainPageLayoutComponent;

  // research bar model
  mediaResearch: string;
  mediaResearchUpdate = new Subject<string>();

  mediasList$: Observable<Media[]>;

  currentPage = 1;
  totalResults = 0;

  private changePage$ = new Subject<number>();
  private changeType$ = new BehaviorSubject<string>('movie');

  constructor(private  tmdbService: TmdbService) {}

  public ngOnInit() {
    this.mediasList$ = combineLatest([
        this.mediaResearchUpdate.pipe(
          debounceTime(500),
          distinctUntilChanged(),
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

  public updateMediasListPage(type: string): Observable<Media[]> {
    return this.changePage$
      .pipe(
        startWith(0),
        switchMap((currentPage) => this.filterMediasByUserEntry(currentPage, type))
      );
  }

  /**
   * filtering all current page medias by keeping only ones starting by user entry string
   */
  private filterMediasByUserEntry(currentPage: number, type: string): Observable<Media[]> {
    if (!(this.mediaResearch && this.mediaResearch.length)) {
      this.totalResults = 0;
      return of([]);
    }

    return this.tmdbService.getMediaByName(this.mediaResearch, type, currentPage + 1)
      .pipe(
        map(medias => {
          this.totalResults = medias.total_results;
          return medias.results;
        })
      );
  }
}
