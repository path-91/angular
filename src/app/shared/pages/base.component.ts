import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {environment} from '../../../environments/environment';

export class BaseComponent implements OnDestroy {

  protected subs$: Subscription[] = [];
  constructor() { }

  ngOnDestroy(): void {
    this.subs$.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  errorImage(event) {
    event.target.src = environment.imgNotFound;
  }
}
