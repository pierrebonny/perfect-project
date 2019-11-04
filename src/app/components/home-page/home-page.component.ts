import {Component, OnInit} from '@angular/core';
import {TmdbService} from '../../services/tmdb.service';
import {Media} from '../../types';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {PageEvent} from '@angular/material';

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
  private currentlyRequestedMediaType = 'all';

  currentPage = 1;
  totalPages = 0;

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
    this.tmdbService.getTrendingMedias(this.currentlyRequestedMediaType, this.currentPage).subscribe(trendingMedias => {
      this.mediasList = trendingMedias.results;
      this.fullMediasList = trendingMedias.results;
      this.totalPages = trendingMedias.total_pages;
    });
  }

  // get medias by type from TMDB
  public filterMediasByType() {
    this.currentlyRequestedMediaType = this.getTypeFilter();

    this.tmdbService.getTrendingMedias(this.currentlyRequestedMediaType, this.currentPage)
      .subscribe(trendingMedias => {
        this.mediasList = trendingMedias.results;
        this.fullMediasList = trendingMedias.results;
        this.totalPages = trendingMedias.total_pages;
        this.filterMediasByUserEntry();
      });
  }

  /**
   * filtering all current page medias by keeping only ones starting by user entry string
   */
  public filterMediasByUserEntry() {
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

  private getTypeFilter(): string {
    if (this.movieChecked && this.tvChecked) {
      return 'all';
    }

    if (this.movieChecked) {
      return 'movie';
    }

    if (this.tvChecked) {
      return  'tv';
    }

    return null;
  }
}
