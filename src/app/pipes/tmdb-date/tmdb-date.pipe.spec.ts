import { TmdbDatePipe } from './tmdb-date.pipe';
import * as moment from 'moment';

describe('TmdbDatePipe', () => {
  const pipe = new TmdbDatePipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('#transform', () => {
    it('should not throw error on undefined date and return empty string', () => {
      expect(() => pipe.transform(undefined, 'YYYY')).not.toThrowError();
      expect(pipe.transform(undefined, 'YYYY')).toEqual('');
    });

    it('should return formated date when format param is not provided', () => {
      expect(pipe.transform('2019-07-25')).toEqual('2019');
    });
  });
});
