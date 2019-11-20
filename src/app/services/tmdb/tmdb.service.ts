import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIResult, Media, MediaCredits, MediaBestCredits } from '../../types';
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
    return this.http.get<MediaCredits>(`${this.baseURL}/${mediaType}/${id}/credits?api_key=${this.apiKey}`)
      .pipe(
        map((mediaCredits: MediaCredits) => {
          return this.parseMediaCredits(mediaCredits);
        })
      );
  }

  /**
   * Find any media by it's name
   */
  public getMediaByName(mediaName: string, mediaType: string, page: number = 1) {
    return this.http.get<APIResult>(
      `${this.baseURL}/search/${mediaType}?api_key=${this.apiKey}&page=${page}&include_adult=false&query=${mediaName}`
    );
  }


  private parseMediaCredits(mediaCredits: MediaCredits): MediaBestCredits {
    const result: MediaBestCredits = {};
    // filtering all crew to get media director
    if (mediaCredits.crew) {
      const director = mediaCredits.crew.find(crewMember => crewMember.job === 'Director');

      if (director) {
        result.directorName = director.name;
      }
    }

    if (mediaCredits.cast) {
      result.actorsNames = mediaCredits.cast
      .slice(0, Math.min(10, mediaCredits.cast.length)) // getting up to 10 actors
      .map(actorName => actorName.name); // getting actors names only
    }
    return result;
  }
}
