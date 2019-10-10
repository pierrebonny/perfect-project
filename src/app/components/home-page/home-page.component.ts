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
  mediaResearch: string;
  mediaResearchUpdate = new Subject<string>();
  movieChecked = true;
  tvChecked = true;
  currentlyRequestedMediaType = 'all';
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
  filterMediasByType() {
    this.mediaResearch = '';
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

  changePage($event: PageEvent) {
    this.currentPage = $event.pageIndex + 1;
    this.tmdbService.getTrendingMedias(this.currentlyRequestedMediaType, this.currentPage).subscribe(trendingMedias => {
      this.mediasList = trendingMedias.results;
      this.fullMediasList = trendingMedias.results;
      this.filterMediasByUserEntry();
    });
  }
}
