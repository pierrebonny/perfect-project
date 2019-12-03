import { Component, Input, OnChanges } from '@angular/core';
import { Media } from '../../types';
import { LocalStorageService } from 'src/app/services/localstorage/localStorage.service';
import { Observable, merge, of, EMPTY } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-list-buttons',
  templateUrl: './list-buttons.component.html',
  styleUrls: ['./list-buttons.component.scss']
})
export class ListButtonsComponent implements OnChanges {

  @Input () currentMedia: Media;
  @Input () mediaType: string;

  public seen$: Observable<boolean>;
  public mustSee$: Observable<boolean>;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnChanges() {
    if (this.currentMedia !== undefined) {
      // Setting buttons state depending on localstorage lists
      this.seen$ = merge(
        of(this.localStorageService.isInList('seen', this.currentMedia.id)),
        this.localStorageService.localStorageNotifier.pipe(
          switchMap((value: { id: number, listName: string, isAdding: boolean }) => {
            return this.updateButtonsState('seen', value);
          })
        )
      );
      this.mustSee$ = merge(
        of(this.localStorageService.isInList('mustSee', this.currentMedia.id)),
        this.localStorageService.localStorageNotifier.pipe(
          switchMap((value: { id: number, listName: string, isAdding: boolean }) => {
            return this.updateButtonsState('mustSee', value);
          })
        )
      );
    }
  }

  private updateButtonsState(buttonListName: string, event: { id: number, listName: string, isAdding: boolean }): Observable<boolean> {
    if (event.id !== this.currentMedia.id || event.listName !== buttonListName) {
      return EMPTY;
    }
    return of(event.isAdding);
  }


  /**
   * Adding or removing current media id to selected list into localstorage
   * Changing other button state if needed
   */
  public updateList(type: string) {
    // updating button status
    this[type] = !this[type];
    // getting list from local storage
    let list = this.localStorageService.getList(type);
    const otherType = type === 'seen' ? 'mustSee' : 'seen';
    if (!list) {
      list = [];
    }
    if (list.find(media => media.id === this.currentMedia.id) !== undefined) {
      this.localStorageService.removeItem(type, this.currentMedia);
      return;
    } else {
      this.currentMedia.media_type = this.mediaType;
      this.localStorageService.addItem(type, this.currentMedia);
      this[otherType] = false;
      this.localStorageService.removeItem(otherType, this.currentMedia);
    }
  }
}
