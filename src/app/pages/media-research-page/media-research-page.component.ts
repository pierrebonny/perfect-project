import { Subject, Observable, of, combineLatest, BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, map, startWith } from 'rxjs/operators';
import { Media, ComponentModel } from 'src/app/types';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';
import { MainPageLayoutComponent } from 'src/app/components/main-page-layout/main-page-layout.component';

@Component({
  selector: 'app-media-research-page',
  templateUrl: './media-research-page.component.html',
  styleUrls: ['./media-research-page.component.scss']
})

export class MediaResearchPageComponent implements OnInit {

  @ViewChild(MainPageLayoutComponent, { static: false }) layoutComponent: MainPageLayoutComponent;

  // research bar model
  public mediaResearch: string;
  public mediaResearchUpdate = new Subject<string>();

  public mediasList$: Observable<Media[]>;

  private currentPage = 1;
  public totalPages: number;

  private changePage$ = new Subject<number>();
  public changeType$ = new BehaviorSubject<ComponentModel>({value: 'movie', label: 'Movies'});

  constructor(private tmdbService: TmdbService) {}

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
          return this.updateMediasListPage(type.value);
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

  public changeType(type: ComponentModel) {
    this.currentPage = 1;
    this.changeType$.next(type);
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
      return of([]);
    }

    return this.tmdbService.getMediaByName(this.mediaResearch, type, currentPage)
      .pipe(
        map(medias => {
          this.totalPages = medias.total_pages;
          return medias.results;
        })
      );
  }
}
