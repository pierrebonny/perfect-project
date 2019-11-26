import { TmdbDatePipe } from './tmdb-date.pipe';

describe('TmdbDatePipe', () => {
  it('create an instance', () => {
    const pipe = new TmdbDatePipe();
    expect(pipe).toBeTruthy();
  });
});
