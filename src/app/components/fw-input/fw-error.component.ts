import {Component, ElementRef, Host, Input, OnInit} from '@angular/core';
import {FwErrorsComponent} from './fw-errors.component';

@Component({
  selector: 'fw-error',
  templateUrl: './fw-error.component.html',
})
export class FwErrorComponent implements OnInit {

  constructor(
    @Host() public parentEl: FwErrorsComponent,
    private elementRef: ElementRef
  ) {
  }

  selectorName = this.elementRef.nativeElement.tagName.toLowerCase();
  private _error: string;

  ngOnInit() {}

  /* COMMENTS */
  @Input()
  set fwError(value: string) {
    this._error = value;
  }

  get fwError(): string {
    return this._error;
  }

}
