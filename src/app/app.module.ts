import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NavbarComponent,
    FooterComponent,
    routingComponents,
    AppRoutingModule,
    SlickCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
