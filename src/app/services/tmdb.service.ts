import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {APIResult, CrewMember, Movie, MovieCredits} from '../types';
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
      apiResults.results.forEach((result: Movie) => {
        if (result.poster_path) { result.poster_path = `https://image.tmdb.org/t/p/original/${result.poster_path}`; }
        if (result.id) { this.getMovieById(result.id).subscribe((movie) => {
          result.runtime = movie.runtime;
        }); }
        if (result.release_date) {
          const momentDate = moment(result.release_date);
          result.release_date = momentDate.format('LL');
        }
      });
      return apiResults;
   }));
  }

  getMovieById(id: number) {
    return this.http.get<Movie>(`${this.baseURL}/movie/${id}?api_key=${this.apiKey}`).pipe(map((movie) => {
      if (movie.poster_path) { movie.poster_path = `https://image.tmdb.org/t/p/original/${movie.poster_path}`; }
      if (movie.release_date) {
        const momentDate = moment(movie.release_date);
        movie.release_date = momentDate.format('LL');
      }
      return movie;
    }));
  }

  /**
   * Get movie director and 10 best actors names
   */
  getMovieBestCredits(id: number) {
    return this.http.get<MovieCredits>(`${this.baseURL}/movie/${id}/credits?api_key=${this.apiKey}`)
      .pipe(map((movieCredits: MovieCredits) => {
      const result = {
        directorName: '',
        actorsNames: []
      };
      // filtering all crew to get movie director
      if (movieCredits.crew) {
        const director = movieCredits.crew.find((crewMember: CrewMember) => {
          return crewMember.job === 'Director';
        });
        if (director) {
          result.directorName = director.name;
        }
      }
      // getting best actors until 10
      if (movieCredits.cast) {
        let i = 0;
        while (i < 10 && movieCredits.cast[i]) {
          result.actorsNames.push(movieCredits.cast[i].name);
          i++;
        }
      }
      return result;
    }));
  }
}
