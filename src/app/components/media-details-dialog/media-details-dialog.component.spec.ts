import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TmdbDatePipe } from '../../pipes/tmdb-date/tmdb-date.pipe';
import { TmdbImgPathPipe } from '../../pipes/tmdb-img-path/tmdb-img-path.pipe';
import { MediaDetailsDialogComponent } from './media-details-dialog.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('MediaDetailsDialogComponent', () => {
  let component: MediaDetailsDialogComponent;
  let fixture: ComponentFixture<MediaDetailsDialogComponent>;
  let http: HttpClient;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaDetailsDialogComponent, TmdbDatePipe, TmdbImgPathPipe ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ HttpClientTestingModule ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: { mediaId: 2190, mediaType: 'tv' } }
      ],
    })
    .compileComponents();
    http = TestBed.get(HttpClient);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
