import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectBoxComponent } from '../multi-select-box/multi-select-box.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PaginationComponent } from '../pagination/pagination.component';
import { PaginationItem, ScheduleItem, selectBox } from '../classes';


@Component({
  selector: 'app-section-schedule',
  standalone: true,
  imports: [
    CommonModule,
    MultiSelectBoxComponent,
    RouterModule,
    PaginationComponent
  ],
  templateUrl: './section-schedule.component.html',
  styleUrls: ['./section-schedule.component.scss']
})
export class SectionScheduleComponent {
  isPagination:boolean = true;
  isActivateNoParam:boolean = false;

  constructor(private route:ActivatedRoute){
    this.route.url.subscribe(params => {
      if(params.length == 1) this.isActivateNoParam = true;
    })
  }

  selects: Array<selectBox> =[
    {
      name: "branch",
      id: "branch",
      optionDefault: "Chi nhánh",
      options: [
        "Ho Chi Minh",
        "Da Nang",
        "Ha Noi"
      ]
    },
    {
      name: "type",
      id: "type",
      optionDefault: "Bộ môn tập",
      options: [
        "Boxing",
        "Gym",
        "Yoga"
      ]
    },
    {
      name: "date",
      id: "date",
      optionDefault: "--/--",
      options: [
        "27/06",
        "27/06",
        "27/06",
      ]
    },
  ]

  schedules: Array<ScheduleItem> =[
    {
      link: "/schedule",
      img: "/assets/img/schedule/schedule.png",
    },
    {
      link: "/schedule",
      img: "/assets/img/schedule/schedule.png",
    },
    {
      link: "/schedule",
      img: "/assets/img/schedule/schedule.png",
    },
    {
      link: "/schedule",
      img: "/assets/img/schedule/schedule.png",
    },
    {
      link: "/schedule",
      img: "/assets/img/schedule/schedule.png",
    },
    {
      link: "/schedule",
      img: "/assets/img/schedule/schedule.png",
    },
  ]

  pages: Array<PaginationItem> =[
    {
      pageId: 1,
      pageNumber: 1,
      param: '',
    },
    {
      pageId: 2,
      pageNumber: 2,
      param: '',
    },
    {
      pageId: 3,
      pageNumber: 3,
      param: '',
    },
    {
      pageId: 4,
      pageNumber: 4,
      param: '',
    },
  ]
}
