import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-xtra-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-xtra-info.component.html',
  styleUrls: ['./news-xtra-info.component.scss']
})
export class NewsXtraInfoComponent {
  @Input() iconClass!: string;
  @Input() content!: string;
}
