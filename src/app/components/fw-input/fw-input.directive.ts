import {Directive, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {environment} from '../../../environments/environment';

export type FwInputSize = 'lg' | 'sm';

@Directive({
  selector: '[fw-input]',
  host: {
    '[class.form-control]': 'true',
    '[class.form-control-lg]': `fwSize === 'lg'`,
    '[class.form-control-sm]': `fwSize === 'sm'`,
    '[class.is-invalid]': `fwControl && fwControl.invalid && fwControl.touched`,
  }
})
export class FwInputDirective implements OnInit {

  constructor() {}

  private _size: FwInputSize;
  private _formControl: FormControl;
  selectorName = `${environment.prefixComponents}-input`;

  ngOnInit() {}

  /* SIZE */
  @Input()
  set fwSize(value: FwInputSize) {
    this._size = value;
  }

  get fwSize(): FwInputSize {
    return this._size;
  }

  /* FormControl */
  @Input()
  set fwControl(value: FormControl) {
    this._formControl = value;
  }

  get fwControl(): FormControl {
    return this._formControl;
  }
}
