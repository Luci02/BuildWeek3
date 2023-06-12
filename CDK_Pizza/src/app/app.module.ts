import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OurBlogComponent } from './component/our-blog/our-blog.component';
import { ChefsComponent } from './component/chefs/chefs.component';

@NgModule({
  declarations: [
    AppComponent,
    OurBlogComponent,
    ChefsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
