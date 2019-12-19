import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserListPageComponent } from './user-list-page.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, BehaviorSubject } from 'rxjs';

describe('UserListPageComponent', () => {
  let component: UserListPageComponent;
  let fixture: ComponentFixture<UserListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListPageComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: ActivatedRoute, useValue: { data: new BehaviorSubject({ listName: 'seen' })} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const layoutComponent = jasmine.createSpyObj('MainPageLayoutComponent', ['reset']);
    component.layoutComponent = layoutComponent;
  });

  it('should create with empty listname', () => {
    const route = TestBed.get(ActivatedRoute);
    route.data.next({ listName: ''});
    expect(component).toBeTruthy();
  });

  it('should create without listname field', () => {
    const route = TestBed.get(ActivatedRoute);
    route.data.next({});
    expect(component).toBeTruthy();
  });

  it('should create with valid listname', () => {
    const route = TestBed.get(ActivatedRoute);
    expect(component).toBeTruthy();
  });

  describe('#changeType', () => {
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
