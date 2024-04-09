import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from '../news-card/news-card.component';
import { BlogCard } from '../classes';

@Component({
  selector: 'app-other-news',
  standalone: true,
  imports: [CommonModule, NewsCardComponent],
  templateUrl: './other-news.component.html',
  styleUrls: ['./other-news.component.scss']
})
export class OtherNewsComponent {

  otherNews: Array<BlogCard> = [
    {
      img: "/assets/img/news/black_white_gym.png",
      alt: "black white gym",
      title: "Bài tập giảm mỡ bụng siêu nhanh hiệu quả cho người mới",
      time: "14/07/2023",
      id: 101
    },
    {
      img: "/assets/img/news/brown_gym.png",
      alt: "brown gym",
      title: "Miễn là chủ thẻ ngân hàng, nhận ngay gói tập ưu đãi 1 năm",
      time: "14/07/2023",
      id: 102
    },
    {
      img: "/assets/img/news/stay_hydrate.png",
      alt: "stay hydrate",
      title: "Giảm cân khoa học không cần tập luyện hay ăn kiêng, cần biết ngay",
      time: "14/07/2023",
      id: 103
    },
    {
      img: "/assets/img/news/gym_dumbell.png",
      alt: "gym dumbell",
      title: "Cẩm nang hướng dẫn tập Gym đúng cách tại nhà",
      time: "14/07/2023",
      id: 104
    },
    {
      img: "/assets/img/news/long_dumbell.png",
      alt: "long dumbell",
      title: "Bí quyết giảm cân thành công mà bạn nên thử một lần trong đời",
      time: "14/07/2023",
      id: 105
    },
    {
      img: "/assets/img/news/milk.png",
      alt: "milk",
      title: "Không ăn kiêng vẫn có Body săn chắc nhờ chế độ tập luyện này",
      time: "14/07/2023",
      id: 106
    },
  ]

}
