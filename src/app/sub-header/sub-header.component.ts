import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sub-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit{
  @Input() isHasContent: boolean = true;
  @Input() page: string = "";
  
  contentBoundary:string='py-[120px] h-[384px]';
  bgImg:string = '';
  
  ngOnInit(): void {
    switch(this.page){
      case "service":
        this.bgImg = "bg-header-service";
        this.contentBoundary = "py-[108px] h-[352px] md:py-[120px]";
        break;
      case "schedule":
        this.bgImg = "bg-header-schedule bg-bottom";
        break;
      case "recruit":
        this.bgImg = "bg-header-recruit bg-top";
        break;
      case "news":
        this.bgImg = "bg-header-blog bg-center";
        break;
      default:
        break;
    }

  }


}
