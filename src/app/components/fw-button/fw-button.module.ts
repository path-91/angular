import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FwButtonComponent} from './fw-button.component';
import {FwSwButtonGroupComponent} from './fw-button-group.component';

@NgModule({
  declarations: [
    FwButtonComponent,
    FwSwButtonGroupComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FwButtonComponent,
    FwSwButtonGroupComponent,

  ]
})
export class FwButtonModule { }
