import { Component, OnInit} from '@angular/core';
import {FwToasts} from './fw-toasts.interface';

@Component({
  selector: 'fw-toasts-container',
  templateUrl: './fw-toasts-container.component.html',
  styleUrls: ['./fw-toasts.component.scss'],
})
export class FwToastsContainerComponent implements OnInit {

  constructor() {}

  private _toasts: FwToasts[] = [];

  ngOnInit() {
  }

  createToast(toast): void {
    this.fwToasts.push(toast);
  }

  removeToast(id: number): void {
    this.fwToasts.some((toast, index) => {
      if (toast.id === id) {
        this.fwToasts.splice(index, 1);
        return true;
      }
    });
  }

  set fwToasts(value: FwToasts[]) {
    this._toasts = value;
  }

  get fwToasts(): FwToasts[] {
    return this._toasts;
  }

}
