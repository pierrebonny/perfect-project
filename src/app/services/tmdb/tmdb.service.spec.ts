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
    let spy: jasmine.Spy;

    beforeEach(() => {
      spy = jasmine.createSpy('trendingMedias');
    });

    it('should return an object with page as 0 when mediaType is undefined', () => {
      service.getTrendingMedias(undefined, 0).subscribe(spy);
      expect(spy).toHaveBeenCalledWith(jasmine.objectContaining({
        page: 0
      }));
    });

    it('should return an object with empty results when mediaType is undefined', () => {
      service.getTrendingMedias(undefined, 0).subscribe(spy);
      expect(spy).toHaveBeenCalledWith(jasmine.objectContaining({
        results: []
      }));
    });

    it('should return the elements from the API when mediaType is defined', done => {
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
      service.getTrendingMedias('movie', 0)
        .subscribe(() => {
          expect(spy).toHaveBeenCalledWith([
            {
              page: 0,
              results: [{ id: 'test-media' }],
              total_pages: 1,
              total_results: 1
            }
          ]);
          done();
        });
    });
  });

  describe('getMediaCredits', () => {

    it('should return empty object with null params provided', () => {
      const spy = jasmine.createSpy('mediaCredits');
      service.getMediaBestCredits(null, null).subscribe(spy);
      expect(spy).toHaveBeenCalledWith({});
    });

    it('should return parsed API object with valid params provided', () => {
      spyOn(http, 'get').and.returnValue(of(
        {
          cast: [{ name: 'a' }, { name: 'b' }, { name: 'c' }, { name: 'd' }],
          crew: [{ name: 'a', job: 'Director' }],
          id: 42304,
        }
      ));
      const spy = jasmine.createSpy('mediaCredits');
      service.getMediaBestCredits(42304, 'movie').subscribe(spy);
      expect(spy).toHaveBeenCalledWith(jasmine.objectContaining({
        actorsNames: ['a', 'b', 'c', 'd'],
        directorName: 'a'
      }));
    });

    it('should return parsed API object with valid params but unknown media provided', () => {
      spyOn(http, 'get').and.returnValue(of(
        { status_code: 34, status_message: 'The resource you requested could not be found.' }
      ));
      const spy = jasmine.createSpy('mediaCredits');
      service.getMediaBestCredits(2132113213132131, 'tv').subscribe(spy);
      expect(spy).toHaveBeenCalledWith({});
    });
  });

  describe('getMediaById', () => {

    it('should return an object with empty results when mediaType is undefined', () => {
      const spy = jasmine.createSpy('mediaById');
      service.getMediaById(121, undefined).subscribe(spy);
      expect(spy).toHaveBeenCalledWith({});
    });

    it('should return the elements from the API when mediaType is defined', () => {
      spyOn(http, 'get').and.returnValue(of(
        {
          poster_path: '/fapXd3v9qTcNBTm39ZC4KUVQDNf.jpg',
          title: 'Angel Has Fallen',
        }
      ));
      const spy = jasmine.createSpy('mediaById');
      service.getMediaById(423204, 'movie').subscribe(spy);
      expect(spy).toHaveBeenCalledWith(
        {
          poster_path: '/fapXd3v9qTcNBTm39ZC4KUVQDNf.jpg',
          title: 'Angel Has Fallen',
        }
      );
    });
  });

  describe('getMediasByName', () => {

    it('should return an object with empty results when mediaType is undefined', () => {
      const spy = jasmine.createSpy('mediasByName');
      service.getMediasByName('Angel Has Fallen', undefined).subscribe(spy);
      expect(spy).toHaveBeenCalledWith(jasmine.objectContaining({
        page: 0,
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
      const spy = jasmine.createSpy('mediasByName');
      service.getMediasByName('Angel Has Fallen', 'movie').subscribe(spy);
      expect(spy).toHaveBeenCalledWith([
        {
          page: 0,
          results: [{
            id: 'test-media'
          }],
          total_pages: 1,
          total_results: 1
        }
      ]);
    });
  });


});
