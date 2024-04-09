import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-section-pt',
  standalone: true,
  imports: [
    CommonModule,
    SlickCarouselModule
  ],
  templateUrl: './section-pt.component.html',
  styleUrls: ['./section-pt.component.scss']
})
export class SectionPtComponent {
  slides = [
    {
      img: "/assets/img/home/pt_1.png",
      name: "Nguyễn Trường Giang"
    },
    {
      img: "/assets/img/home/pt_2.png",
      name: "Nguyễn Trường Giang"
    },
    {
      img: "/assets/img/home/pt_3.png",
      name: "Nguyễn Trường Giang"
    },
    {
      img: "/assets/img/home/pt_4.png",
      name: "Nguyễn Trường Giang"
    },
    {
      img: "/assets/img/home/pt_5.png",
      name: "Nguyễn Trường Giang"
    },
  ];

  slideConfig = {
    "lazyLoad": 'ondemand',
    "slidesToScroll": 1,
    "prevArrow": `<button class="slider-pt-prev absolute -left-2 -translate-y-1/2 w-10 h-10 bg-secondary-1 p-2 z-10 top-1/2 md:p-3 md:w-12 md:h-12 xl:-left-6"><div class="text-2xl leading-6 text-white twi-25-arrow-left-line"></div></button>`,
    "nextArrow": `<button class="slider-pt-next absolute -right-2 -translate-y-1/2 w-10 h-10 bg-secondary-1 p-2 z-20 top-1/2 md:p-3 md:w-12 md:h-12 xl:-right-6"><div class="text-2xl leading-6 text-white twi-25-arrow-right-line"></div></button>`,
    "infinite": true,
    "mobileFirst": true,
    "responsive": [
        {
        "breakpoint": 1279,
        "settings": {
            "slidesToShow": 4,
            "variableWidth": true,
          }
        },
        {
          "breakpoint": 833,
          "settings": {
            "slidesToShow": 2,
            "variableWidth": true,
        }
        },
        {
          "breakpoint": 413,
          "settings": {
            "slidesToShow": 1,
        }
        },
    ]
  };
}
