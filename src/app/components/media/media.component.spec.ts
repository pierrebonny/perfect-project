import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TmdbDatePipe } from '../../pipes/tmdb-date/tmdb-date.pipe';
import { TmdbImgPathPipe } from '../../pipes/tmdb-img-path/tmdb-img-path.pipe';
import { MediaComponent } from './media.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;
  let http: HttpClient;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaComponent, TmdbDatePipe, TmdbImgPathPipe ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ HttpClientTestingModule ],
      providers: [
        { provide: MatDialog, useValue: {} },
      ],
    })
    .compileComponents();
    http = TestBed.get(HttpClient);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    component.mediaType = 'movie';
    component.currentMedia = {
      backdrop_path: '/jOzrELAzFxtMx2I4uDGHOotdfsS.jpg',
      id: 181812,
      media_type: 'movie',
      overview:
      'The next installment in the franchise and the conclusion of the “Star Wars“ sequel trilogy as well as the “Skywalker Saga.',
      poster_path: '/db32LaOibwEliAmSL2jjDF6oDdj.jpg',
      release_date: '2019-12-18',
      title: 'Star Wars: The Rise of Skywalker',
      vote_average: 0,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
