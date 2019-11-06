import * as moment from 'moment';
import { map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIResult, CrewMember, Media, MovieCredits } from '../types';
import { of, Observable } from 'rxjs';

/**
 * Service dedicated to communicate with the media DB API
 */
@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  baseURL = 'https://api.themoviedb.org/3';
  apiKey = '0c6e72279935d4050e3042008b14802c';

  constructor(private http: HttpClient) {}

  /**
   * Recovering weekly trending movies from TMDB to display home screen list
   */
  public getTrendingMedias(mediaType: string, currentPage: number): Observable<APIResult> {
    if (!mediaType) {
      return of({
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0,
      });
    }

    return this.http.get<APIResult>(`${this.baseURL}/trending/${mediaType}/week?api_key=${this.apiKey}&page=${currentPage}`);
  }

  /**
   * Get media details from TMDB thanks to media ID
   */
  public getMediaById(id: number, mediaType: string) {
    return this.http.get<Media>(`${this.baseURL}/${mediaType}/${id}?api_key=${this.apiKey}`);
  }

  /**
   * Get media director and 10 best actors names
   */
  public getMediaBestCredits(id: number, mediaType: string) {
    return this.http.get<MovieCredits>(`${this.baseURL}/${mediaType}/${id}/credits?api_key=${this.apiKey}`)
      .pipe(
        map((movieCredits: MovieCredits) => {
          const result = {
            directorName: '',
            actorsNames: [],
          };

          // filtering all crew to get media director
          if (movieCredits.crew) {
            const director = movieCredits.crew.find(crewMember => crewMember.job === 'Director');

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
        })
      );
  }

  /**
   * Find any media by it's name
   */
  public getMediaByName(mediaName: string) {
    return this.http.get<APIResult>(`${this.baseURL}/search/multi?api_key=${this.apiKey}&include_adult=false&query=${mediaName}`)
      .pipe(
        tap((apiResults: APIResult) => {
          apiResults.results = apiResults.results.filter((result: Media) => {
            return result.media_type === 'movie' || result.media_type === 'tv';
          });
        })
      );
  }
}
