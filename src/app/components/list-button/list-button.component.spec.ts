import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListButtonComponent } from './list-button.component';

describe('ListButtonComponent', () => {
  let component: ListButtonComponent;
  let fixture: ComponentFixture<ListButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
