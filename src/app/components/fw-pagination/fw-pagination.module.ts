import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FwPaginationComponent} from './fw-pagination.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    FwPaginationComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    FwPaginationComponent
  ]
})
export class FwPaginationModule { }
