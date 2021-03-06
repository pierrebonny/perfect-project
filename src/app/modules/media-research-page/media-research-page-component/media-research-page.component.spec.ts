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
    const layoutComponent = jasmine.createSpyObj('MainPageLayoutComponent', ['reset']);
    component.layoutComponent = layoutComponent;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('changeType', () => {
    it('should reset page index to 1', () => {
      component.changePage(5);
      expect(component.getCurrentPage()).toEqual(5);
      component.changeType('tv');
      expect(component.getCurrentPage()).toEqual(1);
    });
    it('should change component media type', () => {
      component.changePage(5);
      expect(component.getCurrentPage()).toEqual(5);
      component.changeType('tv');
      expect(component.changeType$.value).toEqual('tv');
    });
  });
});
