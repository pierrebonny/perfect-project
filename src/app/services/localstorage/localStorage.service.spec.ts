import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './localStorage.service';

describe('TmdbService', () => {
  let service: LocalStorageService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(LocalStorageService);
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getList', () => {
    it('should return empty list on unknown listName', () => {
      const list = service.getList('test');
      expect(list).toEqual([]);
    });

    it('should return localstorage list on existing listname', () => {
      localStorage.setItem('seen', JSON.stringify([{ media_type: 'movie', title: 'Angel Has Fallen' }]));
      const list = service.getList('seen');
      expect(list).toEqual([{ media_type: 'movie', title: 'Angel Has Fallen' }]);
    });
  });
  describe('#getListAndFilterByMediaType', () => {
    it('should return empty list on unknown listName', () => {
      const list = service.getListAndFilterByMediaType('test', 'tv');
      expect(list).toEqual([]);
    });

    it('should return filtered localstorage list on existing listname', () => {
      localStorage.setItem('seen', JSON.stringify([
        { media_type: 'movie', title: 'Angel Has Fallen' },
        { media_type: 'tv', title: 'South Park' }
      ]));
      const list = service.getListAndFilterByMediaType('seen', 'movie');
      expect(list).toEqual([{ media_type: 'movie', title: 'Angel Has Fallen' }]);
    });
  });

  describe('#removeItem', () => {
    it('should not throw error on unknown listName', () => {
      localStorage.removeItem('test');
      expect(() => service.removeItem('test', { id: 111 })).not.toThrowError();
    });

    describe('with a value', () => {
      beforeEach(() => {
        localStorage.setItem('seen', JSON.stringify([
          { media_type: 'movie', title: 'Angel Has Fallen' },
          { media_type: 'tv', title: 'South Park', id: 42 }
        ]));
      });

      it('should not throw error on invalid media', () => {
        expect(() => service.removeItem('seen', undefined)).not.toThrowError();
      });

      it('should remove item from localStorage on valid params', () => {
        service.removeItem('seen', { media_type: 'tv', title: 'South Park', id: 42 });
        const list = JSON.parse(localStorage.getItem('seen'));
        expect(list).toEqual([{ media_type: 'movie', title: 'Angel Has Fallen' }]);
      });
    });
  });

  describe('#isInList', () => {
    it('should not throw error on unknown listName', () => {
      expect(() => service.isInList('test', 111 )).not.toThrowError();
      expect(service.isInList('test', 111)).toEqual(false);
    });

    describe('with a value', () => {
      beforeEach(() => {
        localStorage.setItem('seen', JSON.stringify([
          { media_type: 'movie', title: 'Angel Has Fallen' },
          { media_type: 'tv', title: 'South Park', id: 42 }
        ]));
      });

      it('should not throw error on undefined id', () => {
        expect(() => service.isInList('seen', undefined )).not.toThrowError();
        expect(service.isInList('seen', undefined)).toEqual(false);
      });

      it('should return true if any object with given id is in localstorage list', () => {
        expect(service.isInList('seen', 42 )).toEqual(true);
      });
    });
  });

  describe('#addItem', () => {

    describe('with a value', () => {
      beforeEach(() => {
        localStorage.setItem('seen', JSON.stringify([
          { media_type: 'movie', title: 'Angel Has Fallen' },
          { media_type: 'tv', title: 'South Park', id: 42 }
        ]));
      });
      it('should not throw error on undefined media and not modify localstorage list', () => {
        expect(() => service.addItem('seen', undefined )).not.toThrowError();
        expect(JSON.parse(localStorage.getItem('seen'))).toEqual([
          { media_type: 'movie', title: 'Angel Has Fallen' },
          { media_type: 'tv', title: 'South Park', id: 42 }
        ]);
      });

      it('should add item to localstorage list on valid params', () => {
        service.addItem('seen', { media_type: 'tv', title: 'breaking bad', id: 4242 });
        expect(JSON.parse(localStorage.getItem('seen'))).toEqual([
          { media_type: 'movie', title: 'Angel Has Fallen' },
          { media_type: 'tv', title: 'South Park', id: 42 },
          { media_type: 'tv', title: 'breaking bad', id: 4242 },
        ]);
      });
    });

    it('should create list on unknown listname', () => {
      expect(() => service.addItem('test', { media_type: 'tv', title: 'South Park', id: 42 } )).not.toThrowError();
      expect(JSON.parse(localStorage.getItem('test'))).toEqual([{ media_type: 'tv', title: 'South Park', id: 42 }]);
    });
  });
});
