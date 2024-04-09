import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@Component({
  selector: 'app-slider-banner',
  standalone: true,
  imports: [
    CommonModule,
    SlickCarouselModule,
    NgFor
  ],
  templateUrl: './slider-banner.component.html',
  styleUrls: ['./slider-banner.component.scss']
})
export class SliderBannerComponent {
  slides = [
    {img: "/assets/img/header-footer/banner.png"},
    {img: "/assets/img/header-footer/banner-2.png"},
    {img: "/assets/img/header-footer/banner.png"},
  ];

  slideConfig = {
    "slideToShow": 1,
    "lazyLoad": 'ondemand',
    "slidesToScroll": 1,
    "initialSlide": 0,
    "infinite":true,
    "mobileFirst": true,
    "nextArrow": `<div class="slider-banner absolute bottom-[46.415%] right-0 hidden xl:block
    bg-secondary-1 w-fit p-3 z-10 text-2xl leading-6 text-white twi-25-arrow-right-line"></div>`,
    "prevArrow": `<div class="slider-banner absolute bottom-[46.415%] left-0 hidden xl:block
    bg-secondary-1 w-fit p-3 z-10 text-2xl leading-6 text-white twi-25-arrow-left-line"></div>`,
    "autoplay": true,
    "autoplaySpeed": 3000,
  };
}
