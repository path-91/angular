import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SiteModule} from './site/site.module';
import {HttpClientModule} from '@angular/common/http';
import {NotFoundModule} from './shared/pages/not-found/not-found.module';
import { FwSkeletonComponent } from './components/fw-skeleton/fw-skeleton.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SiteModule,
    NotFoundModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
