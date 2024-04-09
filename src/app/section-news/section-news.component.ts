import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from '../news-card/news-card.component';
import { BlogCard } from '../classes';


@Component({
  selector: 'app-section-news',
  standalone: true,
  imports: [CommonModule, NewsCardComponent],
  templateUrl: './section-news.component.html',
  styleUrls: ['./section-news.component.scss']
})
export class SectionNewsComponent implements OnInit{
  @Input() isHasHeader = true;
  @Input() numCards: string | number;
  @Input() page : string = "home";

  cards:Array<BlogCard>;
  styleBoundary:string = "";

  constructor(){
    this.cards = new Array<BlogCard>;
    this.numCards = 3
  }

  ngOnInit(): void {
    this.takeCards(this.numCards);
    if(this.page==="home"){
      this.styleBoundary = "gap-12 md:grid-cols-3 md:gap-8 xl:gap-6";
    }
    else{
      this.styleBoundary = "gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-y-12 xl:gap-x-6";
    }
  }

  takeCards = (e: string | number) : void => {
    if(e === 3){
      this.cards = [
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
        {
          img: "/assets/img/news/stay_hydrate.png",
          alt: "stay hydrate",
          title: "Khuyến mãi tháng 7 chỉ có tại Seventh Fitness",
          intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie sed tincidunt nisi, viverra erat pellentesque vitae.",
          id: 103
        },
      ]
    }
    else if (typeof e === "string"){
     this.cards=[
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
      {
        img: "/assets/img/news/stay_hydrate.png",
        alt: "stay hydrate",
        title: "Khuyến mãi tháng 7 chỉ có tại Seventh Fitness",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie sed tincidunt nisi, viverra erat pellentesque vitae.",
        id: 103
      },
      {
        img: "/assets/img/news/gym_dumbell.png",
        alt: "gym dumbell",
        title: "Khuyến mãi tháng 7 chỉ có tại Seventh Fitness",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie sed tincidunt nisi, viverra erat pellentesque vitae.",
        id: 104
      },
      {
        img: "/assets/img/news/long_dumbell.png",
        alt: "long dumbell",
        title: "Khuyến mãi tháng 7 chỉ có tại Seventh Fitness",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie sed tincidunt nisi, viverra erat pellentesque vitae.",
        id: 105
      },
      {
        img: "/assets/img/news/milk.png",
        alt: "milk",
        title: "Khuyến mãi tháng 7 chỉ có tại Seventh Fitness",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie sed tincidunt nisi, viverra erat pellentesque vitae.",
        id: 106
      },
      {
        img: "/assets/img/news/female_gym.png",
        alt: "female gym",
        title: "Khuyến mãi tháng 7 chỉ có tại Seventh Fitness",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie sed tincidunt nisi, viverra erat pellentesque vitae.",
        id: 107
      },
      {
        img: "/assets/img/news/plates.png",
        alt: "plates",
        title: "Khuyến mãi tháng 7 chỉ có tại Seventh Fitness",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie sed tincidunt nisi, viverra erat pellentesque vitae.",
        id: 108
      },
      {
        img: "/assets/img/news/fitness.png",
        alt: "fitness",
        title: "Khuyến mãi tháng 7 chỉ có tại Seventh Fitness",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie sed tincidunt nisi, viverra erat pellentesque vitae.",
        id: 109
      },
      {
        img: "/assets/img/news/sit_up.png",
        alt: "sit up",
        title: "Khuyến mãi tháng 7 chỉ có tại Seventh Fitness",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie sed tincidunt nisi, viverra erat pellentesque vitae.",
        id: 110
      },
      {
        img: "/assets/img/news/blue_ball.png",
        alt: "blue ball",
        title: "Khuyến mãi tháng 7 chỉ có tại Seventh Fitness",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie sed tincidunt nisi, viverra erat pellentesque vitae.",
        id: 111
      },
      {
        img: "/assets/img/news/lemonade.png",
        alt: "lemonade",
        title: "Khuyến mãi tháng 7 chỉ có tại Seventh Fitness",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie sed tincidunt nisi, viverra erat pellentesque vitae.",
        id: 112
      },
    ]
  }

  }
}
