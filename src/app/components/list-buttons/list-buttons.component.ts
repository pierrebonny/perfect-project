import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Media } from '../../types';
import { LocalStorageService } from 'src/app/services/localstorage/localStorage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-buttons',
  templateUrl: './list-buttons.component.html',
  styleUrls: ['./list-buttons.component.scss']
})
export class ListButtonsComponent implements OnInit, OnDestroy {

  @Input () currentMedia: Media;

  public seen = false;
  public mustSee = false;

  private subscriptions = new Subscription();

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {
    // Setting buttons state depending on localstorage lists
    this.seen = this.localStorageService.isInList('seen', this.currentMedia.id.toString());
    this.mustSee =  this.localStorageService.isInList('mustSee', this.currentMedia.id.toString());

    /* Subscribing to observable used to be notified when some button state changed
    elsewhere in the app and update current component button if needed (affecting same media) */
    const subscription = this.localStorageService.localStorageNotifier
      .subscribe((value: { id: number, listName: string, isAdding: boolean }) => {
        if (value.id !== this.currentMedia.id) {
          return;
        }

        this[value.listName] = value.isAdding;
      });
    this.subscriptions.add(subscription);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
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
    const index = list.indexOf(this.currentMedia.id.toString());
    if (index >= 0) {
      this.localStorageService.removeItem(type, this.currentMedia.id);
      return;
    } else {
      this.localStorageService.addItem(type, this.currentMedia.id);
      this[otherType] = false;
      this.localStorageService.removeItem(otherType, this.currentMedia.id);
    }
  }
}
