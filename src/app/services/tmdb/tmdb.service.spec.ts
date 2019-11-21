import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TmdbService } from './tmdb.service';
import { HttpClient } from '@angular/common/http';

describe('TmdbService', () => {
  let service: TmdbService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.get(TmdbService);
    http = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getTrendingMedias', () => {
    it('should return an object with page as 0 when mediaType is undefined', () => {
      const spy = jasmine.createSpy('trendingMedias');
      service.getTrendingMedias(undefined, 0).subscribe(spy);
      expect(spy).toHaveBeenCalledWith(jasmine.objectContaining({
        page: 0
      }));
    });

    it('should return an object with empty results when mediaType is undefined', () => {
      const spy = jasmine.createSpy('trendingMedias');
      service.getTrendingMedias(undefined, 0).subscribe(spy);
      expect(spy).toHaveBeenCalledWith(jasmine.objectContaining({
        results: []
      }));
    });

    it('should return the elements from the API when mediaType is defined', () => {
      spyOn(http, 'get').and.returnValue(of([
        {
          page: 0,
          results: [{
            id: 'test-media'
          }],
          total_pages: 1,
          total_results: 1
        }
      ]));
      const spy = jasmine.createSpy('trendingMedias');
      service.getTrendingMedias('movie', 0).subscribe(spy);
      expect(spy).toHaveBeenCalledWith([
        {
          page: 0,
          results: [{ id: 'test-media' }],
          total_pages: 1,
          total_results: 1
        }
      ]);
    });
  });
});
