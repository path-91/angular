import {Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FwToasts } from './fw-toasts.interface';
import { FwToastsContainerComponent } from './fw-toasts-container.component';

@Component({
  selector: 'fw-toasts',
  animations: [
    trigger('enterLeave', [
      state('enterRight', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('* => enterRight', [
        style({ opacity: 0, transform: 'translateX(5%)' }),
        animate('150ms linear')
      ]),
      state('leave', style({
        opacity: 0,
        transform: 'scaleY(0.8)',
        transformOrigin: '0% 0%'
      })),
      transition('* => leave', [
        style({
          opacity: 1,
          transform: 'scaleY(1)',
          transformOrigin: '0% 0%'
        }),
        animate('150ms linear')
      ])
    ])
  ],
  templateUrl: './fw-toasts.component.html',
  styleUrls: ['./fw-toasts.component.scss'],
  host: {
    '[class.toast]': `true`,
    '[class.show]': `true`,
  }
})
export class FwToastsComponent implements OnInit {

  constructor(
    private fwToastsContainer: FwToastsContainerComponent
  ) { }

  @HostBinding('@enterLeave')
  public animationState = 'enterRight';

  @Output() readonly clickClose = new EventEmitter<number>();
  private _toast: FwToasts;

  @HostListener('@enterLeave.done', ['$event']) animationDone(event) {
    if (event.toState === 'leave') {
      this.fwToastsContainer.removeToast(this.fwToast.id);
    }
  }

  ngOnInit() {
    setTimeout(() => {
      this.animationState = 'leave';
    }, 4700);
  }

  onClose(id: number) {
    this.animationState = 'leave';
  }

  @Input()
  set fwToast(value: FwToasts) {
    this._toast = value;
  }

  get fwToast(): FwToasts {
    return this._toast;
  }

}
