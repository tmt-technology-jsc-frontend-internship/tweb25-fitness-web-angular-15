import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconShareComponent } from '../icon-share/icon-share.component';

@Component({
  selector: 'app-news-detail-share-bar',
  standalone: true,
  imports: [CommonModule, IconShareComponent],
  templateUrl: './news-detail-share-bar.component.html',
  styleUrls: ['./news-detail-share-bar.component.scss']
})
export class NewsDetailShareBarComponent {

  iconShares=[
    {
      icon: "twi-25-facebook-fill",
      hoverBg: "hover:bg-info-400",
      hoverText: "hover:text-white",
    },
    {
      icon: "twi-25-twitter-fill",
      hoverBg: "hover:bg-info-300",
      hoverText: "hover:text-white",
    },
    {
      icon: "twi-25-linkedin-fill",
      hoverBg: "hover:bg-info-500",
      hoverText: "hover:text-white",
    },
    {
      icon: "twi-25-pinterest-fill",
      hoverBg: "hover:bg-error-400",
      hoverText: "hover:text-white",
    },
  ]
}
