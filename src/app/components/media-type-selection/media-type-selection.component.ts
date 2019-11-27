import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-media-type-selection',
  templateUrl: './media-type-selection.component.html',
  styleUrls: ['./media-type-selection.component.css']
})

export class MediaTypeSelectionComponent {

  @Output() mediaChanged = new EventEmitter<string>();

  public mediasType = 'movie';

  @Input () additionalClass: string;

  constructor() { }

  public mediaChange(type: string ) {
    this.mediaChanged.emit(type);
    this.mediasType = type;
    // TODO this.reset();
  }
}
