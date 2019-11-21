import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaResearchPageComponent } from './media-research-page.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('MediaResearchPageComponent', () => {
  let component: MediaResearchPageComponent;
  let fixture: ComponentFixture<MediaResearchPageComponent>;
  let http: HttpClient;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaResearchPageComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
    http = TestBed.get(HttpClient);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaResearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
