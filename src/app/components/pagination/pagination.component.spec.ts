import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';
import { SimpleChange } from '@angular/core';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    component.currentPageIndex = 1;
    fixture.detectChanges();
    component.ngOnChanges({ totalPages: new SimpleChange(0, 10, true) });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create with 0 pages as input', () => {
    component.totalPages = 0;
    expect(component).toBeTruthy();
  });

  it('should create with 42 pages as input', () => {
    component.totalPages = 42;
    expect(component).toBeTruthy();
  });

  it('should create with undefined as pages input', () => {
    component.totalPages = undefined;
    expect(component).toBeTruthy();
  });

  describe('changePage', () => {
    it('should not throw error and do nothing on invalid page index param', () => {
      expect(() => component.changePage(undefined)).not.toThrowError();
    });

    it('should update component current index on valid index param', () => {
      component.changePage(2);
      expect(component.currentPageIndex).toEqual(2);
    });
    it('should update component current index on valid index param', () => {
      component.changePage(9);
      expect(component.currentPageIndex).toEqual(9);
    });
  });
});
