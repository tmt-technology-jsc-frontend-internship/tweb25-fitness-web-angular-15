import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogCard } from '../classes';


@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent {
  @Input() card!: BlogCard;
  @Input() smallForm:boolean = false;
}
