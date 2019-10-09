import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {APIResult} from '../types';
import { map } from 'rxjs/operators';

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
      });
      return apiResults;
   }));
  }
}
