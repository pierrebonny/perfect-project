import { TmdbImgPathPipe } from './tmdb-img-path.pipe';

describe('TmdbImgPathPipe', () => {
  const pipe = new TmdbImgPathPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('#transform', () => {
    it('should not throw error on undefined image path and return empty string', () => {
      expect(() => pipe.transform(undefined)).not.toThrowError();
      expect(pipe.transform(undefined)).toEqual('');
    });

    it('should prepend tmdb base path on valid img path', () => {
      expect(pipe.transform('8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg'))
      .toEqual('https://image.tmdb.org/t/p/original/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg');
    });
  });
});
