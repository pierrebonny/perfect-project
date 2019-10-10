import {Component, OnInit} from '@angular/core';
import {TmdbService} from '../../services/tmdb.service';
import {Media} from '../../types';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  mediasList: Array<Media> = [];

  constructor(private  tmdbService: TmdbService) {
  }

  ngOnInit() {
    // Getting trending movies list to be displayed
    this.tmdbService.getTrendingMedias().subscribe(trendingMovies => {
      this.mediasList = trendingMovies.results;
      console.log(this.mediasList);
    });
  }

}
