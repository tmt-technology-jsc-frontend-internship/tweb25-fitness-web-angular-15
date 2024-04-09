import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    SlickCarouselModule,
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  slides=[
    {img: "/assets/img/header-footer/upper_footer_1.png"},
    {img: "/assets/img/header-footer/upper_footer_2.png"},
    {img: "/assets/img/header-footer/upper_footer_3.png"},
    {img: "/assets/img/header-footer/upper_footer_4.png"},
    {img: "/assets/img/header-footer/upper_footer_5.png"},
    {img: "/assets/img/header-footer/upper_footer_6.png"},
    {img: "/assets/img/header-footer/upper_footer_7.png"},
    {img: "/assets/img/header-footer/upper_footer_8.png"},
  ]

  slideConfig = {
    lazyLoad: 'ondemand',
    slideToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite:true,
    mobileFirst: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1279,
        settings: {  
          slideToShow: 8,   
        }
      },
      {
          breakpoint: 833,
          settings: {  
            slideToShow: 5,   
          }
        },
      {
        breakpoint: 413,
        settings: {      
          slideToShow: 3,
        }
      }
    ]
  }

  infos=[
    {
      iconClass: 'twi-25-home-fill',
      text: '12 CN1, P.Sơn Kỳ, Q.Tân Phú, TP. HCM'
    },
    {
      iconClass: 'twi-25-call-fill',
      text: '032 2323 568'
    },
    {
      iconClass: 'twi-25-email-fill',
      text: 'contact@seventhfit.vn'
    },
    {
      iconClass: 'twi-25-language-line',
      text: 'www.seventhfit.vn'
    },
    {
      iconClass: 'twi-25-clock-line',
      text: 'Giờ làm việc: 6h00-22h00'
    },
  ]
}
