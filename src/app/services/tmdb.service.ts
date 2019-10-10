import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APIResult, CrewMember, Media, MovieCredits} from '../types';
import {map} from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})

// service dedicated to communicate with the media DB API
export class TmdbService {

  baseURL = 'https://api.themoviedb.org/3';
  apiKey = '0c6e72279935d4050e3042008b14802c';

  constructor(private http: HttpClient) {
  }

  // Recovering weekly trending movies from TMDB to display home screen list
  getTrendingMedias(mediaType: string, currentPage: number) {
   return this.http.get<APIResult>(`${this.baseURL}/trending/${mediaType}/week?api_key=${this.apiKey}&page=${currentPage}`).pipe(map((apiResults) => {
      apiResults.results.forEach((result: Media) => {
        if (result.poster_path) { result.poster_path = `https://image.tmdb.org/t/p/original/${result.poster_path}`; }
        if (result.id) { this.getMediaById(result.id, result.media_type).subscribe((movie) => {
          result.runtime = movie.runtime;
        }); }
        if (result.release_date) {
          const momentDate = moment(result.release_date);
          result.release_date = momentDate.format('LL');
        }
        if (result.first_air_date) {
          const momentDate = moment(result.first_air_date);
          result.first_air_date = momentDate.format('LL');
        }
      });
      // remove trending persons
      apiResults.results = apiResults.results.filter((result: Media) => {
        return result.media_type === 'movie' || result.media_type === 'tv';
      });
      return apiResults;
   }));
  }

  /**
   * Get media details from TMDB thanks to media ID
   */
  getMediaById(id: number, mediaType: string) {
    return this.http.get<Media>(`${this.baseURL}/${mediaType}/${id}?api_key=${this.apiKey}`).pipe(map((media) => {
      if (media.poster_path) { media.poster_path = `https://image.tmdb.org/t/p/original/${media.poster_path}`; }
      if (media.release_date) {
        const momentDate = moment(media.release_date);
        media.release_date = momentDate.format('LL');
      }
      if (media.first_air_date) {
        const momentDate = moment(media.first_air_date);
        media.first_air_date = momentDate.format('LL');
      }
      return media;
    }));
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
}
