import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FwCommentComponent} from './fw-comment.component';

@NgModule({
  declarations: [
    FwCommentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FwCommentComponent
  ]
})
export class FwCommentModule { }
