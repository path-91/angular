import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SiteComponent} from './site.component';
import {PostsComponent} from './pages/posts/posts.component';
import {PostComponent} from './pages/post/post.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: '', component: SiteComponent, children: [
    { path: 'posts', component: PostsComponent },
    { path: 'posts/tag/:tag_id', component: PostsComponent },
    { path: 'post/:id', component: PostComponent }
  ]}
];

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SiteRoutingModule {}
