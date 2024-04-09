import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from '../sub-header/sub-header.component';
import { CommentBoxComponent } from '../comment-box/comment-box.component';
import { OtherNewsComponent } from '../other-news/other-news.component';
import { DirectoryComponent } from '../directory/directory.component';
import { NewsDetailHeadingComponent } from '../news-detail-heading/news-detail-heading.component';
import { NewsDetailContentComponent } from '../news-detail-content/news-detail-content.component';
import { NewsDetailRelatedNewsComponent } from '../news-detail-related-news/news-detail-related-news.component';
import { NewsDetailShareBarComponent } from '../news-detail-share-bar/news-detail-share-bar.component';
import { NewsDetailSearchBoxComponent } from '../news-detail-search-box/news-detail-search-box.component';

const section=[
  SubHeaderComponent,
  CommentBoxComponent,
  OtherNewsComponent,
  DirectoryComponent,
  NewsDetailHeadingComponent,
  NewsDetailContentComponent,
  NewsDetailRelatedNewsComponent,
  NewsDetailShareBarComponent,
  NewsDetailSearchBoxComponent
]

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [
    CommonModule,
    section
  ],
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent {


}
