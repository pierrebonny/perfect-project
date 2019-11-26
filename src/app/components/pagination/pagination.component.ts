import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnChanges {

  @Input () totalPages: number;
  @Input () currentPageIndex: number;

  @Output () pageChanged = new EventEmitter<number>();

  private pagesIndex: number[];
  public displayedPagesIndex: number[];

  constructor() {}

  public ngOnChanges(changes: SimpleChanges) {
    if (!changes.totalPages) {
      return;
    }
    if (changes.pageIndex && this.currentPageIndex < 0) {
      this.currentPageIndex = 0;
    }
    this.totalPages = changes.totalPages.currentValue;
    this.pagesIndex = new Array(this.totalPages).fill(1).map((x, i) => i + 1);
    this.displayedPagesIndex = this.pagesIndex.slice(1, Math.min(6, this.pagesIndex.length - 1));
  }

  public changePage(pageIndex: number) {
    if (!(0 < pageIndex && pageIndex <= this.totalPages)) {
      return;
    }
    this.currentPageIndex = pageIndex;
    this.computeDisplayedPagesIndex();
    this.pageChanged.emit(pageIndex);
  }

  private computeDisplayedPagesIndex() {
    if (this.currentPageIndex <= 6) {
      this.displayedPagesIndex = this.pagesIndex.slice(1, Math.min(6, this.pagesIndex.length - 1));
    } else {
      const lastIndexToDisplay = this.currentPageIndex === this.totalPages ? this.currentPageIndex - 1 : this.currentPageIndex;
      this.displayedPagesIndex = this.pagesIndex.slice(this.currentPageIndex - 6, lastIndexToDisplay);
    }
  }

  public reset() {
    this.currentPageIndex = 1;
  }

}
