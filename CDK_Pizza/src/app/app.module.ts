import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FoodDrinkComponent } from './food-drink/food-drink.component';
import { CounterComponent } from './counter/counter.component';
import { HeaderComponent } from './component/header/header.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { OurBlogComponent } from './component/our-blog/our-blog.component';
import { ChefsComponent } from './component/chefs/chefs.component';
import { OurServiceComponent } from './component/our-service/our-service.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodDrinkComponent,
    CounterComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    OurBlogComponent,
    ChefsComponent,
    OurServiceComponent
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
