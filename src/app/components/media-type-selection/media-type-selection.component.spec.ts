import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaTypeSelectionComponent } from './media-type-selection.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MediaTypeSelectionComponent', () => {
  let component: MediaTypeSelectionComponent;
  let fixture: ComponentFixture<MediaTypeSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaTypeSelectionComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaTypeSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#mediaChange', () => {
    it('should change current media type', () => {
      expect(component.mediasType).toEqual('movie');
      component.mediaChange('tv');
      expect(component.mediasType).toEqual('tv');
    });
  });
});
