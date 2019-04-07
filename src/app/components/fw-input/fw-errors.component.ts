import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'fw-errors',
  templateUrl: './fw-errors.component.html',
  host: {
    '[class.invalid-feedback]': `fwControl && fwControl.invalid && fwControl.touched`,
  }
})
export class FwErrorsComponent implements OnInit {

  constructor(
    private elementRef: ElementRef
  ) { }

  selectorName = this.elementRef.nativeElement.tagName.toLowerCase();
  private _formControl: FormControl;

  ngOnInit() {
  }

  @Input()
  set fwControl(value: FormControl) {
    this._formControl = value;
  }

  get fwControl(): FormControl {
    return this._formControl;
  }

}
