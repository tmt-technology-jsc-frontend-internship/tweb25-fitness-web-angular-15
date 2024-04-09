import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HomeSubHeaderComponent } from '../home-sub-header/home-sub-header.component';
import { SliderBannerComponent } from '../slider-banner/slider-banner.component';
import { SectionServiceComponent } from '../section-service/section-service.component';
import { SectionSubscriptionComponent } from '../section-subscription/section-subscription.component';
import { SectionPtComponent } from '../section-pt/section-pt.component';
import { SectionQuotComponent } from '../section-quot/section-quot.component';
import { SectionRegisterComponent } from '../section-register/section-register.component';
import { SectionNewsComponent } from '../section-news/section-news.component';

const section = [
  SliderBannerComponent,
  HomeSubHeaderComponent,
  SectionServiceComponent,
  SectionSubscriptionComponent,
  SectionPtComponent,
  SectionQuotComponent,
  SectionRegisterComponent,
  SectionNewsComponent,
]

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SlickCarouselModule,
    section
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  scrollToRegister(e:any){
    e.getElementRef().nativeElement.scrollIntoView({behavior: 'smooth', duration: 500})
  }
}
