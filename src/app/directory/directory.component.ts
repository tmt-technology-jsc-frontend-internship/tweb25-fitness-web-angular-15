import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent {

  borderBottom: string = "border-b border-neutral-2-200";

  openSubDirs = (e:any)=>{
    e.target.classList.toggle('rotate-180');
    let list = e.target.parentNode.nextElementSibling;
    if(list.style.maxHeight){ list.style.maxHeight = null; }
    else{ list.style.maxHeight = list.scrollHeight + 'px'; }
}

  directories=[
    {
      content: "Giới thiệu",
      link: "/home",
    },
    {
      content: "Dịch vụ",
      link: "/service",
      subDirectories: [
        {
          content: "Gym",
          link: "/service"
        },
        {
          content: "Yoga",
          link: "/service"
        },
        {
          content: "Boxing",
          link: "/service"
        },
        {
          content: "Group X",
          link: "/service"
        },
        {
          content: "Fitness",
          link: "/service"
        },
        {
          content: "Personal Trainer",
          link: "/service"
        },
      ]
    },
    {
      content: "Lịch học",
      link: "/schedule",
    },
    {
      content: "Tuyển dụng",
      link: "/recruit",
    },
    {
      content: "Tin tức",
      link: "/news",
    },
  ]

}
