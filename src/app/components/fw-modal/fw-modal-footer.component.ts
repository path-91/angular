import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'fw-modal-footer',
  templateUrl: './fw-modal-footer.component.html',
  styleUrls: ['./fw-modal.component.scss']
})
export class FwModalFooterComponent implements OnInit {

  constructor(
    private elementRef: ElementRef
  ) { }

  selectorName = this.elementRef.nativeElement.tagName.toLowerCase();

  ngOnInit() {
  }

}
