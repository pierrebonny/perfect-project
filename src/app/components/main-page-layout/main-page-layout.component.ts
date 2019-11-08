import { Component, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { Media } from 'src/app/types';
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

  @Output() mediaChanged = new EventEmitter<string>();
  @Output() pageChanged = new EventEmitter<number>();

  public mediaChange(type: { value: string }) {
    this.mediaChanged.emit(type.value);
    this.reset();
  }

  public changePage($event: PageEvent) {
    this.pageChanged.emit($event.pageIndex);
  }

  public reset() {
    this.paginator.pageIndex = 0;
  }

}
