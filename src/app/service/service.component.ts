import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionServiceComponent } from '../section-service/section-service.component';
import { SubHeaderComponent } from '../sub-header/sub-header.component';
import { SectionRegisterComponent } from '../section-register/section-register.component';

const section=[
  SectionServiceComponent,
  SubHeaderComponent,
  SectionRegisterComponent,
  
]

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [
    CommonModule,
    section
  ],
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {

}
