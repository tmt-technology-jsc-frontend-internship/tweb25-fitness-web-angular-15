import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-section-quot',
  standalone: true,
  imports: [
    CommonModule,
    SlickCarouselModule,

  ],
  templateUrl: './section-quot.component.html',
  styleUrls: ['./section-quot.component.scss']
})
export class SectionQuotComponent {
  slides=[
    {
      quot: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna consequat, blandit accumsan purus eros. Quis faucibus vitae in eget arcu suspendisse. Malesuada a nunc pulvinar elementum. Habitant arcu vestibulum non vel. Tincidunt id commodo commodo purus, libero nunc mi.",
      img: "/assets/img/home/boxing1.png"
    },
    {
      quot: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna consequat, blandit accumsan purus eros. Quis faucibus vitae in eget arcu suspendisse. Malesuada a nunc pulvinar elementum. Habitant arcu vestibulum non vel. Tincidunt id commodo commodo purus, libero nunc mi.",
      img: "/assets/img/home/pt_1.png"
    },
    {
      quot: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna consequat, blandit accumsan purus eros. Quis faucibus vitae in eget arcu suspendisse. Malesuada a nunc pulvinar elementum. Habitant arcu vestibulum non vel. Tincidunt id commodo commodo purus, libero nunc mi.",
      img: "/assets/img/home/boxing2.png"
    },
  ]

  slideConfig = {
    slideToShow: 1,
    lazyLoad: 'ondemand',
    slidesToScroll: 1,
    initialSlide: 0,
    infinite:true,
    mobileFirst: true,
    prevArrow: `<button class="slider-quot-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden xl:block"><div class="text-[32px] leading-8 text-white twi-25-arrow-left-line"></div></button>`,
    nextArrow: `<button class="slider-quot-next absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden xl:block"><div class="text-[32px] leading-8 text-white twi-25-arrow-right-line"></div></button>`,
    responsive: [
      {
        breakpoint: 1279,
        settings: {     
          arrows: true, 
        }
      },
      {
        breakpoint: 413,
        settings: {      
          arrows: false,
        }
      }
    ]
  }
}
