import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SiteComponent} from './site.component';
import {SiteRoutingModule} from './site-routing.module';
import {PostsModule} from './pages/posts/posts.module';
import {PostModule} from './pages/post/post.module';

const PagesModules = [
  PostsModule,
  PostModule
];

@NgModule({
  declarations: [
    SiteComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    ...PagesModules
  ],
  providers: [
  ]
})
export class SiteModule { }
