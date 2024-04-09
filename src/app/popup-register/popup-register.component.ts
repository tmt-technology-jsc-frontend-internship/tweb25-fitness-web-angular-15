import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popup-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup-register.component.html',
  styleUrls: ['./popup-register.component.scss']
})
export class PopupRegisterComponent{

  timeNumber:Array<String>;
  timeUnit:Array<String>;
  countDownTime:number;//hours
  totalSecond:number;//second

  constructor(){
    this.countDownTime = 24; 
    this.totalSecond=this.countDownTime*3600;
    this.timeNumber=["00","00","00"];
    this.timeUnit=['giờ', 'phút', 'giây'];
  }

  count(){
    setInterval(()=>{
      // console.log("in function")
      // console.log(this.totalSecond)
      if(this.totalSecond < 0){
        return;
      }
  
      let second:string|number, 
      minute:string|number, 
      hour:string|number;
      let tmp:number = this.totalSecond;
    
      second = tmp % 60;
      tmp = Math.floor(tmp / 60);
      minute = tmp % 60;
      hour = Math.floor(tmp / 60);
      this.totalSecond--;
    
      if(second < 10) second = '0' + second;
      if(minute < 10) minute = '0' + minute;
      if(hour < 10) hour = '0' + hour;

      this.timeNumber[2] = String(second)
      this.timeNumber[1] = String(minute)
      this.timeNumber[0] = String(hour)
      // console.log(this.timeNumber)

    }, 1000);
  }

  inputs=[
    {
      type: "text",
      name: "fullname",
      id: "fullname-trial",
      placeholder: "Nhập họ và tên",
      required: true
    },
    {
      type: "number",
      name: "phone",
      id: "phone-trial",
      placeholder: "Nhập số điện thoại",
      required: true
    },
  ]

  isOpen = false;

  togglePopup(open:boolean){
    this.isOpen = open;
  }

}
