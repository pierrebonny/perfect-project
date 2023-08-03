import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TmdbDatePipe } from '../../pipes/tmdb-date/tmdb-date.pipe';
import { TmdbImgPathPipe } from '../../pipes/tmdb-img-path/tmdb-img-path.pipe';
import { HookComponent } from './hook.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Media, MediaBestCredits } from 'src/app/types';
import { Subscription, of } from 'rxjs';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';

describe('HookComponent', () => {
  let component: HookComponent;
  let fixture: ComponentFixture<HookComponent>;
  let http: HttpClient;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HookComponent, TmdbDatePipe, TmdbImgPathPipe ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
    http = TestBed.get(HttpClient);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.mediaType = 'tv';
    component.topMedia = { media_type: 'tv', title: 'South Park', id: 42 };
    component.updateComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
