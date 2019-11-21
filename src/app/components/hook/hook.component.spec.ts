import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TmdbDatePipe } from '../../pipes/tmdb-date/tmdb-date.pipe';
import { TmdbImgPathPipe } from '../../pipes/tmdb-img-path/tmdb-img-path.pipe';
import { HookComponent } from './hook.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('HookComponent', () => {
  let component: HookComponent;
  let fixture: ComponentFixture<HookComponent>;
  let http: HttpClient;

  beforeEach(async(() => {
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
