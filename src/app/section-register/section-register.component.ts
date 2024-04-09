import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-register.component.html',
  styleUrls: ['./section-register.component.scss']
})
export class SectionRegisterComponent {
  inputs=[
    {
      type: "text",
      name: "username",
      id: "username",
      placeholder: "Họ tên*",
      required: true
    },
    {
      type: "tel",
      name: "phone",
      id: "phone",
      placeholder: "Số điện thoại*",
      required: true
    },
    {
      type: "email",
      name: "email",
      id: "email",
      placeholder: "Email*",
      required: false
    },
  ]
  constructor(private el:ElementRef){}
  getElementRef(){
    return this.el;
  }
}
