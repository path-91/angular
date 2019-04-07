import {Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'fw-card',
  templateUrl: './fw-card.component.html',
  styleUrls: ['./fw-card.component.scss'],
  host:{
    '[class.card]': 'true'
  }
})
export class FwCardComponent implements OnInit {

  constructor(
    private elementRef: ElementRef
  ) { }

  private _footer: string;
  private _header: string;
  selectorName = this.elementRef.nativeElement.tagName.toLowerCase();

  ngOnInit() {}

  /* HEADER */
  @Input()
  set fwHeader(value: string) {
    this._header = value;
  }

  get fwHeader(): string {
    return this._header;
  }

  /* FOOOTER */
  @Input()
  set fwFooter(value: string) {
    this._footer = value;
  }

  get fwFooter(): string {
    return this._footer;
  }




}


