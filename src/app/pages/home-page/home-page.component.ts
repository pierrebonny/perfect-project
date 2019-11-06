import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Media } from '../../types';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { PageEvent, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {

  @ViewChild('paginator', { static: false }) paginator: MatPaginator;

  // displayed list
  mediasList: Array<Media> = [];

  // research bar model
  mediaResearch: string;
  mediaResearchUpdate = new Subject<string>();

  // radioboxes model
  currentMediaType = 'movie';

  currentPage = 1;
  totalPages = 0;

  private subscriptions = new Subscription();

  constructor(private  tmdbService: TmdbService) {
    // create event to call tmdb when user tries to filter media list
    this.mediaResearchUpdate.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(() => {
        this.filterMediasByUserEntry();
      });
  }

  ngOnInit() {
    // Getting trending medias list to be displayed
    const subscription = this.tmdbService.getTrendingMedias(this.currentMediaType, this.currentPage).subscribe(trendingMedias => {
      this.mediasList = trendingMedias.results;
      this.totalPages = trendingMedias.total_pages;
    });

    this.subscriptions.add(subscription);
  }
  /**
   * filtering all current page medias by keeping only ones starting by user entry string
   */
  filterMediasByUserEntry() {
    const subscription = this.tmdbService.getMediaByName(this.currentMediaType).subscribe(medias => {
      this.mediasList = medias.results;
      this.totalPages = medias.total_pages;
    });
    this.subscriptions.add(subscription);
  }

  /**
   * on click on paginator get next or previous page from TMDB
   */
  changePage($event: PageEvent) {
    this.currentPage = $event.pageIndex + 1;
    const subscription = this.tmdbService.getTrendingMedias(this.currentMediaType, this.currentPage).subscribe(trendingMedias => {
      this.mediasList = trendingMedias.results;
    });
    this.subscriptions.add(subscription);
  }

  /**
   * When user click on any radio button change media type displayed
   */
  mediaChange() {
    this.currentPage = 1;
    this.paginator.pageIndex = 0;
    const subscription = this.tmdbService.getTrendingMedias(this.currentMediaType, this.currentPage).subscribe(trendingMedias => {
      this.mediasList = trendingMedias.results;
      this.totalPages = trendingMedias.total_pages;
    });
    this.subscriptions.add(subscription);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
