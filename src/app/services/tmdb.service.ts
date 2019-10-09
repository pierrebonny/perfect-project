import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {APIResult, Movie} from '../types';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})

// service dedicated to communicate with the movie DB API
export class TmdbService {

  baseURL = 'https://api.themoviedb.org/3';
  apiKey = '0c6e72279935d4050e3042008b14802c';

  constructor(private http: HttpClient) {
  }

  getTrendingMovies() {
   return this.http.get<APIResult>(`${this.baseURL}/trending/movie/week?api_key=${this.apiKey}`).pipe(map((apiResults) => {
      apiResults.results.forEach(result => {
        if (result.poster_path) { result.poster_path = `https://image.tmdb.org/t/p/original/${result.poster_path}`; }
        if (result.id) { this.getMovieById(result.id).subscribe(movie => result.runtime = movie.runtime); }
        if (result.release_date) {
          const momentDate = moment(result.release_date);
          result.release_date = momentDate.format('LL');
        }
      });
      return apiResults;
   }));
  }

  getMovieById(id: number) {
    return this.http.get<Movie>(`${this.baseURL}/movie/${id}?api_key=${this.apiKey}`);
  }
}
