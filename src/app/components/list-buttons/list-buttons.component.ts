import {Component, Input, OnInit} from '@angular/core';
import {Media} from '../../types';

@Component({
  selector: 'app-list-buttons',
  templateUrl: './list-buttons.component.html',
  styleUrls: ['./list-buttons.component.css']
})
export class ListButtonsComponent implements OnInit {

  @Input () currentMedia: Media;
  @Input () currentList: string;

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

  icons = {
    seen: 'visibility',
    mustSee: 'edit'
  };

  constructor() { }

  ngOnInit() {
  }


  /**
   * Adding current media id to selected list into localstorage
   */
  addToList($event) {
    $event.stopPropagation();
    let list = JSON.parse(localStorage.getItem(this.currentList));
    if (!list) {
      list = [];
    }
    if (list.includes(this.currentMedia.id)) {
      const index = list.indexOf(this.currentMedia.id);
      if (index > -1) {
        list.splice(index, 1);
      }
    } else {
      list.push(this.currentMedia.id);
    }
    localStorage.setItem(this.currentList, JSON.stringify(list));
  }

  /**
   * Checking whether or not current media id is in selected list in local storage
   */
  isInList() {
    const list = JSON.parse(localStorage.getItem(this.currentList));
    return list && list.includes(this.currentMedia.id);
  }

}
