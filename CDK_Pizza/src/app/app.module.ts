import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OurMenuPricingComponent } from './component/our-menu-pricing/our-menu-pricing.component';
import { HotPizzaMealsComponent } from './component/hot-pizza-meals/hot-pizza-meals.component';



@NgModule({
  declarations: [
    AppComponent,
    OurMenuPricingComponent,
    HotPizzaMealsComponent
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
