import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'fw-card-title',
  templateUrl: './fw-card-title.component.html',
  styleUrls: ['./fw-card.component.scss'],
  host: {
    '[class.card-title]': 'true'
  }
})
export class FwCardTitleComponent implements OnInit {

  constructor(
    private elementRef: ElementRef
  ) { }

  selectorName = this.elementRef.nativeElement.tagName.toLowerCase();

  ngOnInit() {}

}


