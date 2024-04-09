import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCard } from '../classes';

@Component({
  selector: 'app-news-detail-related-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-detail-related-news.component.html',
  styleUrls: ['./news-detail-related-news.component.scss']
})
export class NewsDetailRelatedNewsComponent {
  relatedNews: Array<BlogCard> = [
    {
      img: "/assets/img/news/black_white_gym.png",
      alt: "black white gym",
      title: "Khuyến mãi tháng 7 chỉ có tại Seventh Fitness",
      intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie sed tincidunt nisi, viverra erat pellentesque vitae.",
      id: 101
    },
    {
      img: "/assets/img/news/brown_gym.png",
      alt: "brown gym",
      title: "Khuyến mãi tháng 7 chỉ có tại Seventh Fitness",
      intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie sed tincidunt nisi, viverra erat pellentesque vitae.",
      id: 102
    },
  ]
}
