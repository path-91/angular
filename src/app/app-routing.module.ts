import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './shared/pages/not-found/not-found.component';
import {SiteRoutingModule} from './site/site-routing.module';

const routes: Routes = [
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    }),
    SiteRoutingModule,
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
