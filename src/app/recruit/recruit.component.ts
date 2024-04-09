import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from '../sub-header/sub-header.component';
import { SectionRecruitComponent } from '../section-recruit/section-recruit.component';

const section=[
  SubHeaderComponent,
  SectionRecruitComponent
]

@Component({
  selector: 'app-recruit',
  standalone: true,
  imports: [
    CommonModule,
    section
  ],
  templateUrl: './recruit.component.html',
  styleUrls: ['./recruit.component.scss']
})
export class RecruitComponent {

}
