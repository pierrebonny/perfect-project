import {
  createHostComponentFactory,
  HostComponentFactory,
  SpectatorWithHost,
} from '@pm/spectator';
import { MediaComponent } from './media.component';
import { TmdbDatePipe } from '../../pipes/tmdb-date/tmdb-date.pipe';
import { TmdbImgPathPipe } from '../../pipes/tmdb-img-path/tmdb-img-path.pipe';
import { MatDialog } from '@angular/material/dialog';

describe('Component: MediaComponent', () => {
  let createHost: HostComponentFactory<MediaComponent>;
  let host: SpectatorWithHost<MediaComponent>;

  beforeEach(() => {
    createHost = createHostComponentFactory({
      component: MediaComponent,
      shallow: true,
      declarations: [TmdbDatePipe, TmdbImgPathPipe],
      providers: [
        { provide: MatDialog, useValue: {} },
      ],
    });
  });

  it('should render', () => {
    host = createHost('<app-media></app-media>');
    expect(host.getDirectiveInstance('app-media')).toExist();
  });

  describe('New media', () => {
    it('should test', () => {
      host = createHost('<app-media [currentMedia]="currentMedia" [mediaType]="mediaType"></app-media>', true, {
        currentMedia: {
          backdrop_path: '/jOzrELAzFxtMx2I4uDGHOotdfsS.jpg',
          id: 181812,
          media_type: 'movie',
          overview:
          'The next installment in the franchise and the conclusion of the “Star Wars“ sequel trilogy as well as the “Skywalker Saga.',
          poster_path: '/db32LaOibwEliAmSL2jjDF6oDdj.jpg',
          release_date: '2019-12-18',
          title: 'Star Wars: The Rise of Skywalker',
          vote_average: 0,
        },
        mediaType: 'movie'
      });
      expect(host.getDirectiveInstance('app-media')).toExist();
    });
  });
});
