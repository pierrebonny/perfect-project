import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MainPageLayoutComponent } from './main-page-layout.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MainPageLayoutComponent', () => {
  let component: MainPageLayoutComponent;
  let fixture: ComponentFixture<MainPageLayoutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageLayoutComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageLayoutComponent);
    component = fixture.componentInstance;
    component.additionalClass = '';
    component.totalPages = 1;
    component.mediasList = [{
      backdrop_path: '/jOzrELAzFxtMx2I4uDGHOotdfsS.jpg',
      id: 181812,
      media_type: 'movie',
      overview:
      'The next installment in the franchise and the conclusion of the “Star Wars“ sequel trilogy as well as the “Skywalker Saga.',
      poster_path: '/db32LaOibwEliAmSL2jjDF6oDdj.jpg',
      release_date: '2019-12-18',
      title: 'Star Wars: The Rise of Skywalker',
      vote_average: 0,
    }];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
