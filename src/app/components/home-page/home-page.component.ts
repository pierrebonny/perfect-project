import {Component, OnInit} from '@angular/core';
import {TmdbService} from '../../services/tmdb.service';
import {Movie} from '../../types';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  moviesList: Array<Movie> = [];

  constructor(private  tmdbService: TmdbService) {
  }

  ngOnInit() {
    // Getting trending movies list to be displayed
    this.tmdbService.getTrendingMovies().subscribe(trendingMovies => {
      this.moviesList = trendingMovies.results;
      console.log(this.moviesList);
    });
  }

}
