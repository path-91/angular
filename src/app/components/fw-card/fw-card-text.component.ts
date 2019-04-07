import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'fw-card-text',
  templateUrl: './fw-card-text.component.html',
  styleUrls: ['./fw-card.component.scss'],
  host: {
    '[class.card-text]': 'true'
  }
})
export class FwCardTextComponent implements OnInit {

  constructor(
    private elementRef: ElementRef
  ) { }

  selectorName = this.elementRef.nativeElement.tagName.toLowerCase();

  ngOnInit() {}

}


