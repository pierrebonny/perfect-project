import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaGridComponent } from './media-grid.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MediaGridComponent', () => {
  let component: MediaGridComponent;
  let fixture: ComponentFixture<MediaGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaGridComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
