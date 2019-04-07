import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FwModalComponent} from './fw-modal.component';
import {FwButtonModule} from '../fw-button/fw-button.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FwModalFooterComponent} from './fw-modal-footer.component';
import {FwModalBodyComponent} from './fw-modal-body.component';

@NgModule({
  declarations: [
    FwModalComponent,
    FwModalFooterComponent,
    FwModalBodyComponent,
  ],
  imports: [
    CommonModule,
    FwButtonModule,
    BrowserAnimationsModule,
  ],
  exports: [
    FwModalComponent,
    FwModalFooterComponent,
    FwModalBodyComponent,
  ]
})
export class FwModalModule { }
