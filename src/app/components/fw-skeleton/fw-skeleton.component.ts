import {Component, Input, OnInit} from '@angular/core';
import {isNumber} from 'util';

@Component({
  selector: 'fw-skeleton',
  templateUrl: './fw-skeleton.component.html',
  styleUrls: ['./fw-skeleton.component.scss']
})
export class FwSkeletonComponent implements OnInit {

  constructor() { }

  private _loading = false;
  private _rows = 4;
  private _rowsArr: any[];
  private _section = 1;
  private _sectionArr: any[];

  ngOnInit() {
    if (this.fwSectionArr === undefined) {
      this.fwSectionArr = new Array(this.fwSection);
    }
    if (this.fwRowsArr === undefined) {
      this.fwRowsArr = new Array(this.fwRows);
    }
  }

  /* LOADING */
  @Input()
  set fwLoading(value: boolean) {
    this._loading = value;
  }

  get fwLoading(): boolean {
    return this._loading;
  }

  /* ROWS */
  @Input()
  set fwRows(value: number) {
    if (isNumber(value)) {
      this._rows = value;
      this._rowsArr = new Array(value);
    }
  }

  get fwRows(): number {
    return this._rows;
  }

  set fwRowsArr(value: any[]) {
    this._rowsArr = value;
  }

  get fwRowsArr(): any[] {
    return this._rowsArr;
  }

  /* SECTION */
  @Input()
  set fwSection(value: number) {
    if (isNumber(value)) {
      this._section = value;
      this._sectionArr = new Array(value);
    }
  }

  get fwSection(): number {
    return this._section;
  }

  set fwSectionArr(value: any[]) {
    this._sectionArr = value;
  }

  get fwSectionArr(): any[] {
    return this._sectionArr;
  }

}
