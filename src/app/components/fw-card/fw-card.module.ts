import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FwCardComponent} from './fw-card.component';
import {FwCardBodyComponent} from './fw-card-body.component';
import {FwCardTitleComponent} from './fw-card-title.component';
import {FwCardTextComponent} from './fw-card-text.component';

@NgModule({
  declarations: [
    FwCardComponent,
    FwCardBodyComponent,
    FwCardTitleComponent,
    FwCardTextComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FwCardComponent,
    FwCardBodyComponent,
    FwCardTitleComponent,
    FwCardTextComponent,
  ]
})
export class FwCardModule { }
