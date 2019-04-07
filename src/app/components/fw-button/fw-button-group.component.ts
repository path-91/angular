import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {toBoolean} from '../../shared/core/util/convert';

export type FwButtonGroupSize = 'sm' | 'lg';

@Component({
  selector: 'fw-button-group, fw-button-group-vertical',
  preserveWhitespaces: false,
  templateUrl: './fw-button-group.component.html'
})
export class FwSwButtonGroupComponent implements OnInit {
  constructor(
    private elementRef: ElementRef
  ) {}

  selectorName = this.elementRef.nativeElement.tagName.toLowerCase();
  private _size: FwButtonGroupSize;
  private _vertical: boolean = false;
  classMap: object;

  ngOnInit() {
    this.classMap = {
      ['btn-group']: !this.fwVertical,
      ['btn-group-vertical']: this.fwVertical,
      [`btn-group-${this.fwSize}`]: this.fwSize,
    };
  }

  /* SIZE */
  @Input()
  get fwSize(): FwButtonGroupSize {
    return this._size;
  }
  set fwSize(value: FwButtonGroupSize) {
    this._size = value;
  }

  /* VERTICAL */
  @Input()
  get fwVertical(): boolean {
    return this._vertical;
  }
  set fwVertical(value: boolean) {
    this._vertical = toBoolean(value);
  }

}
