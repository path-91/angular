import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FwInputDirective} from './fw-input.directive';
import {FwErrorsComponent} from './fw-errors.component';
import {FwErrorComponent} from './fw-error.component';
import {FwFormGroupComponent} from './fw-form-group.component';

@NgModule({
  declarations: [
    FwInputDirective,
    FwErrorsComponent,
    FwErrorComponent,
    FwFormGroupComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FwInputDirective,
    FwErrorsComponent,
    FwErrorComponent,
    FwFormGroupComponent,
  ]
})
export class FwInputModule { }
