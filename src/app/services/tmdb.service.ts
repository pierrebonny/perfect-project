import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIResult, CrewMember, Media, MovieCredits } from '../types';
import { map, tap } from 'rxjs/operators';
import * as moment from 'moment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// service dedicated to communicate with the media DB API
export class TmdbService {
  public basImageUrl = 'https://image.tmdb.org/t/p/original/';
  private baseURL = 'https://api.themoviedb.org/3';
  private apiKey = '0c6e72279935d4050e3042008b14802c';

  constructor(private http: HttpClient) {
  }

  // Recovering weekly trending movies from TMDB to display home screen list
  getTrendingMedias(mediaType: string, currentPage: number): Observable<APIResult> {
    return this.http.get<APIResult>(`${this.baseURL}/trending/${mediaType}/week?api_key=${this.apiKey}&page=${currentPage}`)
      .pipe(tap(apiResults => this.filterMovieAndTv(apiResults)));
  }

  /**
   * Get media details from TMDB thanks to media ID
   */
  getMediaById(id: number, mediaType: string) {
    return this.http.get<Media>(`${this.baseURL}/${mediaType}/${id}?api_key=${this.apiKey}`);
  }

  /**
   * Get media director and 10 best actors names
   */
  getMediaBestCredits(id: number, mediaType: string) {
    return this.http.get<MovieCredits>(`${this.baseURL}/${mediaType}/${id}/credits?api_key=${this.apiKey}`)
      .pipe(map((movieCredits: MovieCredits) => {
        const result = {
          directorName: '',
          actorsNames: []
        };
        // filtering all crew to get media director
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

  private filterMovieAndTv(apiResults: APIResult) {
    apiResults.results = apiResults.results.filter((result: Media) => {
      return result.media_type === 'movie' || result.media_type === 'tv';
    });
  }
}
