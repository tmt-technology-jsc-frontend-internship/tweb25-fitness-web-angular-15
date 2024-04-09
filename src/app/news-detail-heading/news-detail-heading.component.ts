import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsXtraInfoComponent } from '../news-xtra-info/news-xtra-info.component';
import { NewsLikeShareComponent } from '../news-like-share/news-like-share.component';

@Component({
  selector: 'app-news-detail-heading',
  standalone: true,
  imports: [CommonModule, NewsXtraInfoComponent, NewsLikeShareComponent],
  templateUrl: './news-detail-heading.component.html',
  styleUrls: ['./news-detail-heading.component.scss']
})
export class NewsDetailHeadingComponent {
  newsXtraInfos=[
    {
      icon: "twi-25-calendar-fill",
      content: "10/07/2022"
    },
    {
      icon: "twi-25-eye-open-fill",
      content: "123 lượt xem"
    },
  ]

  newsLikeShares=[
    {
      isIcon: true,
      icon: "twi-25-like-fill",
      content: "Thích"
    },
    {
      isIcon: false,
      icon: "",
      content: "Chia sẻ"
    },
  ]
}
