import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListButtonsComponent } from './list-buttons.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ListButtonsComponent', () => {
  let component: ListButtonsComponent;
  let fixture: ComponentFixture<ListButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListButtonsComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListButtonsComponent);
    component = fixture.componentInstance;
    // provide inputs here
    component.mediaType = 'movie';
    component.currentMedia = {
      backdrop_path: '/jOzrELAzFxtMx2I4uDGHOotdfsS.jpg',
      id: 181812,
      media_type: 'movie',
      overview:
      'The next installment in the franchise and the conclusion of the “Star Wars“ sequel trilogy as well as the “Skywalker Saga.',
      poster_path: '/db32LaOibwEliAmSL2jjDF6oDdj.jpg',
      release_date: '2019-12-18',
      title: 'Star Wars: The Rise of Skywalker',
      vote_average: 0,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
