import {Component, OnInit} from '@angular/core';
import {PostsService} from '../../../shared/services/posts.service';
import {BaseComponent} from '../../../shared/pages/base.component';
import {forkJoin, merge} from 'rxjs';
import {startWith, switchMap} from 'rxjs/operators';
import {TagsService} from '../../../shared/services/tags.service';
import {Tags} from '../../../shared/interfaces/tags.interface';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {animate, keyframes, query, stagger, state, style, transition, trigger} from '@angular/animations';
import {fadeAnimation} from '../../../shared/core/animation/fade-animations';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  animations: [fadeAnimation]
})
export class PostsComponent extends BaseComponent implements OnInit {

  constructor(
    private postsService: PostsService,
    private tagsService: TagsService,
    private title: Title,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    super();
  }

  loadingPosts = true;
  loadingTags = true;
  posts: Posts[];
  tags: Tags[];
  totalPosts: number;
  currentPage = 1;

  ngOnInit() {
    this.title.setTitle('Публикации');

    this.subs$[this.subs$.length] = merge(
      this.route.queryParams
    )
    .pipe(
      startWith({}),
      switchMap(() => {
        this.loadingPosts = true;
        const page = this.route.snapshot.queryParams['page'];
        const tag_id = this.route.snapshot.queryParams['tag_id'];
        if (page) {
          this.currentPage = page;
        }
        return forkJoin(
          this.postsService.index(page, tag_id),
          this.postsService.total(tag_id)
        );
      })
    ).subscribe((data) => {
        this.posts = data[0];
        this.totalPosts = data[1];
        this.loadingPosts = false;
      });

    this.subs$[this.subs$.length] = this.tagsService.getAll()
      .subscribe((data) => {
        this.tags = data;
        this.loadingTags = false;
      });
  }

  onClickPage(page: number): void {
    this.currentPage = page;

    const navExtras: NavigationExtras = {
      queryParams: { page: page, tag_id: this.route.snapshot.queryParams['tag_id'] },
    };

    this.router.navigate(['/posts'], navExtras);
  }

  onClickTag(): void {
    this.currentPage = 1;
  }

}
