import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FwToastsComponent} from './fw-toasts.component';
import {FwToastsContainerComponent} from './fw-toasts-container.component';
import {Overlay} from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    FwToastsComponent,
    FwToastsContainerComponent,
  ],
  imports: [
    CommonModule,
  ],
  entryComponents: [
    FwToastsComponent,
    FwToastsContainerComponent,
  ],
  providers: [
    Overlay,
  ]
})
export class FwToastsModule { }
