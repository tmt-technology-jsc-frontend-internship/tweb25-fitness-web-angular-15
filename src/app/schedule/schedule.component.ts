import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from '../sub-header/sub-header.component';
import { SectionScheduleComponent } from '../section-schedule/section-schedule.component';
import { SectionRegisterComponent } from '../section-register/section-register.component';

const section=[
  SubHeaderComponent,
  SectionScheduleComponent,
  SectionRegisterComponent
]

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [
    CommonModule,
    section,
  ],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {

}
