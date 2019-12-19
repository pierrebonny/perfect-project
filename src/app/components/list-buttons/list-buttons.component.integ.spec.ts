import {
  createHostComponentFactory,
  HostComponentFactory,
  SpectatorWithHost,
} from '@pm/spectator';
import { ListButtonsComponent } from './list-buttons.component';
import { ListButtonComponent } from '../list-button/list-button.component';
import { LocalStorageService } from '../../services/localstorage/localStorage.service';

describe('Component: ListButtonsComponent', () => {
  let createHost: HostComponentFactory<ListButtonsComponent>;
  let host: SpectatorWithHost<ListButtonsComponent>;

  beforeEach(() => {
    createHost = createHostComponentFactory({
      component: ListButtonsComponent,
      declarations: [
        ListButtonComponent
      ],
      shallow: false,
    });
  });

  it('should render', () => {
    host = createHost('<app-list-buttons></app-list-buttons>');
    expect(host.getDirectiveInstance('app-list-buttons')).toExist();
  });

  describe('New media', () => {
    it('should deselect the Must-see button', () => {
      host = createHost('<app-list-buttons [currentMedia]="currentMedia"></app-list-buttons>');
      host.setHostInput('currentMedia', {
        id: 0
      });
      expect('.mustSee').toHaveClass('list-button__button--not-added');
    });

    it('should deselect the Already seen button', () => {
      host = createHost('<app-list-buttons [currentMedia]="currentMedia"></app-list-buttons>');
      host.setHostInput('currentMedia', {
        id: 0
      });
      expect('.seen').toHaveClass('list-button__button--not-added');
    });
  });

  describe('Media already-seen', () => {
    beforeEach(() => {
      host = createHost('<app-list-buttons [currentMedia]="currentMedia"></app-list-buttons>');
      const localStorage = host.get(LocalStorageService);
      const spy = (listName: string, id: number) => {
        return listName === 'seen';
      };
      spyOn(localStorage, 'isInList').and.callFake(spy as any);
      host.setHostInput('currentMedia', { id: 0 });
    });

    it('should select already-seen button', () => {
      expect('.seen').toHaveClass('list-button__button--already-added');
    });

    it('should deselect must-see button', () => {
      expect('.mustSee').toHaveClass('list-button__button--not-added');
    });
  });
});
