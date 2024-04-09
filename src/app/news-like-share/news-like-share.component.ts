import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-like-share',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-like-share.component.html',
  styleUrls: ['./news-like-share.component.scss']
})
export class NewsLikeShareComponent {
  @Input() iconClass!: string;
  @Input() hasIcon:boolean = false;
  @Input() content!: string;
}
