import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {toBoolean} from '../../shared/core/util/convert';
import {environment} from '../../../environments/environment';
import {UpdateHostClassService} from '../../shared/core/services/update-host-class.service';

export type FwButtonSize = 'sm' | 'lg' ;
export type FwButtonType =
  'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link' |
  'outline-primary' | 'outline-secondary' | 'outline-success' | 'outline-danger' | 'outline-warning'
  | 'outline-info' | 'outline-light' | 'outline-dark' | 'outline-link';

@Component({
  selector: '[fw-button]',
  templateUrl: './fw-button.component.html',
  styleUrls: ['./fw-button.component.scss'],
  providers: [UpdateHostClassService],
})
export class FwButtonComponent implements OnInit {

  selectorName = `${environment.prefixComponents}-button`;
  private el: HTMLElement;
  private _type: FwButtonType = 'primary';
  private _size: FwButtonSize;
  private _block = false;
  private _loading = false;

  constructor(
    private fwUpdateHostClassService: UpdateHostClassService,
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {
    this.el = this.elementRef.nativeElement;
  }

  /* TYPE */
  @Input()
  get fwType(): FwButtonType {
    return this._type;
  }

  set fwType(value: FwButtonType) {
    this._type = value;
  }

  /* SIZE */
  @Input()
  set fwSize(value: FwButtonSize) {
    this._size = value;
  }

  get fwSize(): FwButtonSize {
    return this._size;
  }

  /* BLOCK LEVEL */
  @Input()
  set fwBlock(value: boolean) {
    this._block = toBoolean(value);
  }

  get fwBlock(): boolean {
    return this._block;
  }

  /* LOADING */
  @Input()
  set fwLoading(value: boolean) {
    if (toBoolean(value) === false) {
      this.renderer.removeAttribute(this.el, 'disabled');
    } else if (toBoolean(value) === true) {
      this.renderer.setAttribute(this.el, 'disabled', 'true');
    }
    this._loading = toBoolean(value);
  }

  get fwLoading(): boolean {
    return this._loading;
  }

  ngOnInit() {
    const classMap = {
      [`btn`]: true,
      [`btn-${this.fwType}`]: this.fwType,
      [`btn-${this.fwSize}`]: this.fwSize,
      [`btn-block`]: this.fwBlock
    };
    this.fwUpdateHostClassService.updateHostClass(this.el, classMap);
  }

}
