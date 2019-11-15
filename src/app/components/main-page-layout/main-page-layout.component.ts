import { Component, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { Media, ComponentModel } from 'src/app/types';
import { PageEvent, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-main-page-layout',
  templateUrl: './main-page-layout.component.html',
  styleUrls: ['./main-page-layout.component.css']
})
export class MainPageLayoutComponent {

  @ViewChild('paginator', { static: false }) paginator: MatPaginator;

  @Input () mediasList: Media[];
  @Input () totalResults: number;
  @Input () additionalClass: string;

  public mediasType: ComponentModel = { value: 'movie', label: 'Movies' };

  @Output() mediaChanged = new EventEmitter<ComponentModel>();
  @Output() pageChanged = new EventEmitter<number>();

  constructor() {}

  public mediaChange(type: ComponentModel ) {
    this.mediaChanged.emit(type);
    this.mediasType = type;
    this.reset();
  }

  public changePage($event: PageEvent) {
    this.pageChanged.emit($event.pageIndex);
  }

  public reset() {
    this.paginator.pageIndex = 0;
  }

}
