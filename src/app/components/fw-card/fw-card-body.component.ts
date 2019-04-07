import {Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'fw-card-body',
  templateUrl: './fw-card-body.component.html',
  styleUrls: ['./fw-card.component.scss'],
  host:{
    '[class.card-body]': 'true'
  }
})
export class FwCardBodyComponent implements OnInit {

  constructor(
    private elementRef: ElementRef
  ) { }

  selectorName = this.elementRef.nativeElement.tagName.toLowerCase();

  ngOnInit() {}

}


