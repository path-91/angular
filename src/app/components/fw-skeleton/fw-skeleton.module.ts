import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FwSkeletonComponent} from './fw-skeleton.component';

@NgModule({
  declarations: [
    FwSkeletonComponent
  ],
  exports: [
    FwSkeletonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FwSkeletonModule { }
