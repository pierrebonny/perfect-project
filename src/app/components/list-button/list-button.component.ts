import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list-button',
  templateUrl: './list-button.component.html',
  styleUrls: ['./list-button.component.scss']
})
export class ListButtonComponent {

  @Input () label: string;
  @Input () listName: string;
  @Input () mediaId: string;
  @Input () isSelected: boolean;

  @Output() buttonClicked = new EventEmitter<string>();

  constructor() { }

  public onButtonClick($event) {
    $event.stopPropagation();
    this.buttonClicked.emit(this.listName);
  }

}
