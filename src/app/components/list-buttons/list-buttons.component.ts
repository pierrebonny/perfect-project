import { Component, Input, OnInit } from '@angular/core';
import { Media } from '../../types';
import { LocalStorageService } from 'src/app/services/localstorage/localStorage.service';

@Component({
  selector: 'app-list-buttons',
  templateUrl: './list-buttons.component.html',
  styleUrls: ['./list-buttons.component.css']
})
export class ListButtonsComponent implements OnInit {

  @Input () currentMedia: Media;

  // variable labels and icons name depending on currentList value;
  buttonLabels = {
    seen: {
      before: 'Add to viewed medias',
      after: 'Already viewed'
    },
    mustSee: {
      before: 'Add to must see medias',
      after: 'Must see'
    }
  };

  public seen = false;
  public mustSee = false;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {
    this.localStorageService.isInList('seen', this.currentMedia.id.toString());
    this.localStorageService.isInList('mustSee', this.currentMedia.id.toString());
  }


  /**
   * Adding current media id to selected list into localstorage
   * Disabling other button if needed
   */
  updateList(type: string) {
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
      this.localStorageService.removeItem(type, this.currentMedia.id.toString());
      return;
    } else {
      this.localStorageService.addItem(type, this.currentMedia.id.toString());
      this[otherType] = false;
      this.localStorageService.removeItem(otherType, this.currentMedia.id.toString());
    }
  }
}
