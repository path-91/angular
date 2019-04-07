import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../../../shared/pages/base.component';
import {Title} from '@angular/platform-browser';
import {PostsService} from '../../../shared/services/posts.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CommentsService} from '../../../shared/services/comments.service';
import {Comments} from '../../../shared/interfaces/comments.interface';
import { take } from 'rxjs/operators';
import {Subject} from 'rxjs';
import {FwToastsService} from '../../../components/fw-toasts/fw-toasts.service';
import {Location} from '@angular/common';
import {fadeAnimation} from '../../../shared/core/animation/fade-animations';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  animations: [fadeAnimation]
})
export class PostComponent extends BaseComponent implements OnInit {

  constructor(
    private title: Title,
    private postsService: PostsService,
    private commentsService: CommentsService,
    private route: ActivatedRoute,
    private router: Router,
    private fwToastsService: FwToastsService,
    private location: Location
  ) {
    super();
  }

  loadingPost = true;
  post: Posts;
  comments: Comments[];
  reaplyComment: Comments;
  commentModalTitle: string;
  visibleCommentModal = false;
  commentModalLoadingBtn = false;
  commentModalForm = new FormGroup({
    'text': new FormControl('', [Validators.required]),
  });

  ngOnInit() {
    this.subs$[this.subs$.length] = this.postsService.getById(this.route.snapshot.params['id'])
      .subscribe((data) => {
        this.post = data.post;
        this.comments = data.comments;
        this.loadingPost = false;

        this.title.setTitle(this.post['title']);
      });
  }

  onClickBack(): void {
    this.location.back();
  }

  openModalComment(): void {
    this.visibleCommentModal = true;
  }

  replyChange(item): void {
    this.commentModalTitle = 'user name';
    this.visibleCommentModal = true;

    this.reaplyComment = item;
  }

  hideCommentModal(): void {
    this.visibleCommentModal = false;
    this.commentModalTitle = '';
    this.commentModalForm.reset();
  }

  addComment(): void {
    const addComment$ = new Subject();
    const formData = new FormData();
    const form = this.commentModalForm;

    let parent_id = 0;
    if (this.reaplyComment && this.reaplyComment.id) {
      parent_id = this.reaplyComment.id;
    }
    formData.append('text', form.get('text').value);
    formData.append('post_id', String(this.post.id));
    formData.append('parent_id', String(parent_id));

    this.commentModalLoadingBtn = true;
    this.commentsService.add(formData)
      .pipe(
        take(1)
      )
      .subscribe((data) => {
        this.commentModalLoadingBtn = false;
        this.visibleCommentModal = false;
        this.commentModalTitle = '';
        this.commentModalForm.reset();

        if (Number(data.parent_id) !== 0) {
          if (this.reaplyComment.child === undefined) {
            this.reaplyComment.child = [];
          }
          this.reaplyComment.child.push(data);
        } else {
          this.comments.push(data);
        }
        delete this.reaplyComment;

        this.fwToastsService.create('Готово', 'Комментарий успешно добавлен!');
      });
  }


}
