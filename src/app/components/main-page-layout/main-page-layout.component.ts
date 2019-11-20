import { Component, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { Media } from 'src/app/types';
import { PaginationComponent } from 'src/app/components/pagination/pagination.component';

@Component({
  selector: 'app-main-page-layout',
  templateUrl: './main-page-layout.component.html',
  styleUrls: ['./main-page-layout.component.scss']
})
export class MainPageLayoutComponent {

  @ViewChild('paginator', { static: false }) paginator: PaginationComponent;

  @Input () mediasList: Media[];
  @Input () additionalClass: string;
  @Input () totalPages: number;

  public mediasType = 'movie';

  @Output() mediaChanged = new EventEmitter<string>();
  @Output() pageChanged = new EventEmitter<number>();

  constructor() {}

  public mediaChange(type: string ) {
    this.mediaChanged.emit(type);
    this.mediasType = type;
    this.reset();
  }

  public changePage(pageIndex: number) {
    this.pageChanged.emit(pageIndex);
  }

  public reset() {
    this.paginator.reset();
  }

}
