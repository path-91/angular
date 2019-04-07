import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'fw-form-group',
  templateUrl: './fw-form-group.component.html',
  host: {
    '[class.form-group]': `true`,
  }
})
export class FwFormGroupComponent implements OnInit {

  constructor(
    private elementRef: ElementRef
  ) { }

  selectorName = this.elementRef.nativeElement.tagName.toLowerCase();

  ngOnInit() {}

}
