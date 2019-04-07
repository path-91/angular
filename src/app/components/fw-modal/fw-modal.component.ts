import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {fadeAnimation} from '../../shared/core/animation/fade-animations';
import {animate, query, stagger, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'fw-modal',
  templateUrl: './fw-modal.component.html',
  styleUrls: ['./fw-modal.component.scss'],
  animations: [
    fadeAnimation,
    trigger('enterLeave', [
      state(':enter', style({
        opacity: 1,
        transform: 'translateY(0)',
      })),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10%)'}),
        animate('200ms linear')
      ]),
      state('void', style({
        opacity: 0,
        transform: 'translateY(-10%)',
      })),
      transition('* => void', [
        style({
          opacity: 1,
          transform: 'translateY(0)',
        }),
        animate('150ms linear')
      ])
    ])
  ],
})
export class FwModalComponent implements OnInit {

  constructor(
    private elementRef: ElementRef
  ) { }

  private _visible = false;
  private _title: string;
  @Output() readonly fwVisibleChange = new EventEmitter<boolean>();
  selectorName = this.elementRef.nativeElement.tagName.toLowerCase();

  ngOnInit() {}

  /* VISIBLE */
  @Input()
  set fwVisible(value: boolean) {
    this._visible = value;
  }

  get fwVisible(): boolean {
    return this._visible;
  }

  /* TITLE */
  @Input()
  set fwTitle(value: string) {
    this._title = value;
  }

  get fwTitle(): string {
    return this._title;
  }

  onClickBackdrop(event) {
    if ( (event.target as HTMLElement).classList.contains('modal') && this.fwVisible ) {
      this.fwVisible = false;
      this.fwVisibleChange.emit(false);
    }
  }

  onCloseButton(event) {
    if (this.fwVisible) {
      this.fwVisible = false;
      this.fwVisibleChange.emit(false);
    }
  }

}
