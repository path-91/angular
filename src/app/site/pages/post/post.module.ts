import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostComponent} from './post.component';
import {FwPaginationModule} from '../../../components/fw-pagination/fw-pagination.module';
import {FwCardModule} from '../../../components/fw-card/fw-card.module';
import {FwButtonModule} from '../../../components/fw-button/fw-button.module';
import {FwCommentModule} from '../../../components/fw-comment/fw-comment.module';
import {FwModalModule} from '../../../components/fw-modal/fw-modal.module';
import {FwInputModule} from '../../../components/fw-input/fw-input.module';
import {FwToastsModule} from '../../../components/fw-toasts/fw-toasts.module';
import {PostsService} from '../../../shared/services/posts.service';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {CommentsService} from '../../../shared/services/comments.service';
import {FwSkeletonModule} from '../../../components/fw-skeleton/fw-skeleton.module';

const fwLib = [
  FwPaginationModule,
  FwCardModule,
  FwButtonModule,
  FwCommentModule,
  FwModalModule,
  FwInputModule,
  FwToastsModule,
  FwSkeletonModule,
];

@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ...fwLib
  ],
  providers: [
    PostsService,
    CommentsService,
  ]
})
export class PostModule { }
