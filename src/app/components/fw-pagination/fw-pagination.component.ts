import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {isInteger} from '../../shared/core/util/check';

@Component({
  selector: 'fw-pagination',
  templateUrl: './fw-pagination.component.html',
  styleUrls: ['./fw-pagination.component.scss']
})
export class FwPaginationComponent implements OnInit {

  private _total: number;
  private _currentPage = 1;
  private _pageSize = 10;
  @Output() fwCurrentPageChange: EventEmitter<number> = new EventEmitter();
  pages: Pages[] = [];

  constructor() { }

  ngOnInit(): void {}

  /*PageSize*/
  @Input()
  set fwPageSize(value: number) {
    this._pageSize = value;
  }

  get fwPageSize(): number {
    return this._pageSize;
  }
  /*CurrentPage*/
  @Input()
  set fwCurrentPage(value: number) {
    this._currentPage = value;
  }

  get fwCurrentPage(): number {
    return this._currentPage;
  }
  /*Total*/
  @Input()
  set fwTotal(value: number) {
    this._total = value;
    this.generatePages();
  }

  get fwTotal(): number {
    return this._total;
  }

  /*PrevPage*/
  get fwPrevPage() {
    if (this.fwCurrentPage > 1) {
      return this.fwCurrentPage - 1;
    }
  }
  /*NextPage*/
  get fwNextPage() {
    if (this.fwCurrentPage < this.lastIndex) {
      return this.fwCurrentPage + 1;
    }
  }
  /*LastIndex*/
  get lastIndex(): number {
    return Math.ceil(this.fwTotal / this.fwPageSize);
  }

  generatePages(): void {
    const pages: Pages[] = [];
    if (this.lastIndex <= 9) {
      for (let i = 1; i <= this.lastIndex; i++) {
        pages.push({index: i});
      }
    } else {
      const currentPage = this.fwCurrentPage;
      let left = Math.max((this.fwCurrentPage <= 3) ? 1 : 2, currentPage - 2);
      let right = Math.min(currentPage + 2, this.lastIndex);

      if (currentPage - 1 <= 2) {
        right = 5;
      }
      if (this.lastIndex - currentPage <= 2) {
        left = this.lastIndex  - 4;
      }

      for (let i = left; i <= right; i++) {
        pages.push({index: i});
      }
    }
    this.pages = pages;
  }

  clickPage(event: Event, page: number): void {
    event.preventDefault();

    if ((page === this.fwCurrentPage) || (!isInteger(page))) {
      return;
    }
    this.fwCurrentPage = page;
    this.fwCurrentPageChange.emit(this.fwCurrentPage);
    this.generatePages();
  }

}

export interface Pages {
  index: number;
}
