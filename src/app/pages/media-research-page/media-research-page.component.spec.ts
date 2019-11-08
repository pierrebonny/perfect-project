import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaResearchComponent } from './media-research-page.component';

describe('MediaResearchComponent', () => {
  let component: MediaResearchComponent;
  let fixture: ComponentFixture<MediaResearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaResearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
