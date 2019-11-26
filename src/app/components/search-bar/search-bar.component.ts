import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  public research: string;

  @Output () researchUpdated = new EventEmitter<string>();

  public onResearchUpdate($event) {
    this.researchUpdated.emit($event);
  }


}
