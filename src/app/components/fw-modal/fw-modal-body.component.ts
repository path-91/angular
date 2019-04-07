import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'fw-modal-body',
  templateUrl: './fw-modal-body.component.html',
  styleUrls: ['./fw-modal.component.scss']
})
export class FwModalBodyComponent implements OnInit {

  constructor(
    private elementRef: ElementRef
  ) { }

  selectorName = this.elementRef.nativeElement.tagName.toLowerCase();

  ngOnInit() {
  }

}
