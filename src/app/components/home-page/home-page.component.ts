import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { Media } from '../../types';
import { Subject, Subscription, of, interval } from 'rxjs';
import { debounceTime, distinctUntilChanged, take } from 'rxjs/operators';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  // displayed list
  mediasList: Array<Media> = [];
  // full list
  fullMediasList: Array<Media> = [];
  // research bar model
  mediaResearch: string;
  mediaResearchUpdate = new Subject<string>();
  // Checkboxes models
  movieChecked = true;
  tvChecked = true;

  // current media types selected (movie, tv shows, both of them)
  currentlyRequestedMediaType = 'all';

  currentPage = 1;
  totalPages = 0;
  private subscriptions = new Subscription();

  constructor(private tmdbService: TmdbService) {
    // create event to call tmdb when user tries to filter media list
    this.mediaResearchUpdate.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(() => {
        this.filterMediasByUserEntry();
      });
  }

  ngOnInit() {
    // Cold vs Hot Observable example
    of(1, 2, 3).subscribe({
      next: value => console.log(value),
      complete: () => console.log('complete'),
    });
    interval(1000).pipe(take(4)).subscribe({
      next: value => console.log(value),
      complete: () => console.log('complete'),
    });

    // Getting trending medias list to be displayed
    const subscription = this.tmdbService.getTrendingMedias(this.currentlyRequestedMediaType, this.currentPage)
      .subscribe(trendingMedias => {
        this.mediasList = trendingMedias.results;
        this.fullMediasList = trendingMedias.results;
        this.totalPages = trendingMedias.total_pages;
      });

    this.subscriptions.add(subscription);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  // get medias by type from TMDB
  filterMediasByType() {
    if (this.movieChecked && this.tvChecked) {
      this.currentlyRequestedMediaType = 'all';
    } else if (this.movieChecked) {
      this.currentlyRequestedMediaType = 'movie';
    } else if (this.tvChecked) {
      this.currentlyRequestedMediaType = 'tv';
    } else {
      this.mediasList = [];
    }
    if (this.movieChecked || this.tvChecked) {
      this.tmdbService.getTrendingMedias(this.currentlyRequestedMediaType, this.currentPage).subscribe(trendingMedias => {
        this.mediasList = trendingMedias.results;
        this.fullMediasList = trendingMedias.results;
        this.filterMediasByUserEntry();
      });
    }
  }
  // filtering all current page medias by keeping only ones starting by user entry string
  filterMediasByUserEntry() {
    this.mediasList = this.fullMediasList.filter((media: Media) => {
      return media.title && media.title.toLowerCase().startsWith(this.mediaResearch.toLowerCase())
        || media.name && media.name.toLowerCase().startsWith(this.mediaResearch.toLowerCase());
    });
  }

  // on click on paginator get next or previous page from TMDB
  changePage($event: PageEvent) {
    this.currentPage = $event.pageIndex + 1;
    this.tmdbService.getTrendingMedias(this.currentlyRequestedMediaType, this.currentPage).subscribe(trendingMedias => {
      this.mediasList = trendingMedias.results;
      this.fullMediasList = trendingMedias.results;
      // if user entered string in search bar apply it in next page
      this.filterMediasByUserEntry();
    });
  }
}
