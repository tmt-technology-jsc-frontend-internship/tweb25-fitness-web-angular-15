import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PopupRegisterComponent } from '../popup-register/popup-register.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PopupRegisterComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  implements AfterViewInit{
  @ViewChild(PopupRegisterComponent)
  private popupComponent!: PopupRegisterComponent;

  ngAfterViewInit(): void {
    setTimeout(()=>this.popupComponent.count(), 0);
  }

  togglePopup(){
    this.toggleMenu(false);
    this.popupComponent.togglePopup(true);
  }

  isOpenMenuChange = {
    "hidden": true,
    "flex": false
  };

  toggleMenu(open: boolean){
    this.isOpenMenuChange = {
      "hidden": !open,
      "flex": open
    };
    this.popupComponent.togglePopup(false);
  }

  pages=[
    {
      link: "/home",
      name: "Giới thiệu"
    },
    {
      link: "/service",
      name: "Dịch vụ"
    },
    {
      link: "/schedule",
      name: "Lịch học"
    },
    {
      link: "/recruit",
      name: "Tuyển dụng"
    },
    {
      link: "/news",
      name: "Tin tức"
    },
  ]
}
