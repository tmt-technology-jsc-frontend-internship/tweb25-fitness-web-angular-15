import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionRegisterComponent } from '../section-register/section-register.component';
import { SectionNewsComponent } from '../section-news/section-news.component';
import { SubHeaderComponent } from '../sub-header/sub-header.component';

const section=[
  SectionNewsComponent,
  SectionRegisterComponent,
  SubHeaderComponent,
]

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    CommonModule,
    section
  ],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {

}
