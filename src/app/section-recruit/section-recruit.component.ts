import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../pagination/pagination.component';
import { ActivatedRoute } from '@angular/router';
import { MultiSelectBoxComponent } from '../multi-select-box/multi-select-box.component';
import { PaginationItem, PositionInfo, selectBox } from '../classes';
import { JobCardComponent } from '../job-card/job-card.component';


@Component({
  selector: 'app-section-recruit',
  standalone: true,
  imports: [CommonModule, PaginationComponent, MultiSelectBoxComponent, JobCardComponent],
  templateUrl: './section-recruit.component.html',
  styleUrls: ['./section-recruit.component.scss']
})
export class SectionRecruitComponent {
  isPagination:boolean = true;
  isActivateNoParam:boolean = false;

  constructor(private route:ActivatedRoute){
    this.route.url.subscribe(params => {
      if(params.length == 1) this.isActivateNoParam = true;
    })
  }

  selects: Array<selectBox> =[
    {
      name: "position",
      id: "position",
      optionDefault: "Chức vụ công việc",
      options: [
        "Nhân viên tuyển dụng",
        "Nhân viên tuyển dụng",
        "Nhân viên tuyển dụng",
      ]
    },
    {
      name: "place",
      id: "place",
      optionDefault: "Vị trí làm việc",
      options: [
        "Thành phố Hồ chí Minh",
        "Thành phố Hồ chí Minh",
        "Thành phố Hồ chí Minh",
      ]
    },
  ]

  jobs: Array<PositionInfo> =[
    {
      position: "nhân viên tuyển dụng",
      number: 2,
      wayToWork: "Full time",
      place: "Thành Phố Hồ Chí Minh",
      link: "/recruit"
    },
    {
      position: "nhân viên thiết kế",
      number: 2,
      wayToWork: "Full time",
      place: "Thành Phố Hồ Chí Minh",
      link: "/recruit"
    },
    {
      position: "nhân viên tuyển dụng",
      number: 2,
      wayToWork: "Full time",
      place: "Thành Phố Hồ Chí Minh",
      link: "/recruit"
    },
    {
      position: "nhân viên thiết kế",
      number: 2,
      wayToWork: "Full time",
      place: "Thành Phố Hồ Chí Minh",
      link: "/recruit"
    },
    {
      position: "nhân viên tuyển dụng",
      number: 2,
      wayToWork: "Full time",
      place: "Thành Phố Hồ Chí Minh",
      link: "/recruit"
    },
    {
      position: "nhân viên thiết kế",
      number: 2,
      wayToWork: "Full time",
      place: "Thành Phố Hồ Chí Minh",
      link: "/recruit"
    },
    {
      position: "nhân viên tuyển dụng",
      number: 2,
      wayToWork: "Full time",
      place: "Thành Phố Hồ Chí Minh",
      link: "/recruit"
    },
    {
      position: "nhân viên thiết kế",
      number: 2,
      wayToWork: "Full time",
      place: "Thành Phố Hồ Chí Minh",
      link: "/recruit"
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
