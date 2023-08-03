import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListButtonsComponent } from './list-buttons.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ListButtonsComponent', () => {
  let component: ListButtonsComponent;
  let fixture: ComponentFixture<ListButtonsComponent>;

  beforeEach(waitForAsync(() => {
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

  describe('#updateList', () => {
    it('should remove current media from localstorage list if already in it and not modify other list', () => {
      localStorage.setItem('seen', JSON.stringify([
        { media_type: 'movie', title: 'Angel Has Fallen' },
        {
          backdrop_path: '/jOzrELAzFxtMx2I4uDGHOotdfsS.jpg',
          id: 181812,
          media_type: 'movie',
          overview:
          'The next installment in the franchise and the conclusion of the “Star Wars“ sequel trilogy as well as the “Skywalker Saga.',
          poster_path: '/db32LaOibwEliAmSL2jjDF6oDdj.jpg',
          release_date: '2019-12-18',
          title: 'Star Wars: The Rise of Skywalker',
          vote_average: 0,
        },
      ]));
      localStorage.setItem('mustSee', JSON.stringify([{ media_type: 'tv', title: 'South Park', id: 42 }]));
      component.updateList('seen');
      expect(JSON.parse(localStorage.getItem('seen'))).toEqual([{ media_type: 'movie', title: 'Angel Has Fallen' }]);
      expect(JSON.parse(localStorage.getItem('mustSee'))).toEqual([{ media_type: 'tv', title: 'South Park', id: 42 }]);
      localStorage.removeItem('seen');
      localStorage.removeItem('mustSee');
    });

    it('should create list in local storage if not already in it, add current media to' +
    ' localstorage list if not already in it and remove it from other list if needed', () => {
      localStorage.setItem('mustSee', JSON.stringify([
        { media_type: 'movie', title: 'Angel Has Fallen', id: 42 },
        {
          backdrop_path: '/jOzrELAzFxtMx2I4uDGHOotdfsS.jpg',
          id: 181812,
          media_type: 'movie',
          overview:
          'The next installment in the franchise and the conclusion of the “Star Wars“ sequel trilogy as well as the “Skywalker Saga.',
          poster_path: '/db32LaOibwEliAmSL2jjDF6oDdj.jpg',
          release_date: '2019-12-18',
          title: 'Star Wars: The Rise of Skywalker',
          vote_average: 0,
        },
      ]));
      component.updateList('seen');
      expect(JSON.parse(localStorage.getItem('seen'))).toEqual([{
        backdrop_path: '/jOzrELAzFxtMx2I4uDGHOotdfsS.jpg',
        id: 181812,
        media_type: 'movie',
        overview:
        'The next installment in the franchise and the conclusion of the “Star Wars“ sequel trilogy as well as the “Skywalker Saga.',
        poster_path: '/db32LaOibwEliAmSL2jjDF6oDdj.jpg',
        release_date: '2019-12-18',
        title: 'Star Wars: The Rise of Skywalker',
        vote_average: 0,
      }]);
      expect(JSON.parse(localStorage.getItem('mustSee'))).toEqual([{ media_type: 'movie', title: 'Angel Has Fallen', id: 42 }]);
      localStorage.removeItem('seen');
      localStorage.removeItem('mustSee');
    });
  });
});
