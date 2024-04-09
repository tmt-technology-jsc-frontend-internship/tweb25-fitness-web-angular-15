import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-service.component.html',
  styleUrls: ['./section-service.component.scss']
})
export class SectionServiceComponent {
  services = [
    {
      link: './service',
      type: "Boxing",
      srcImg: "/assets/img/home/boxing1.png",
      altImg: "Boxing"
    },
    {
      link: './service',
      type: "Gym",
      srcImg: "/assets/img/home/gym.png",
      altImg: "Gym"
    },
    {
      link: './service',
      type: "Personal Trainer",
      srcImg: "/assets/img/home/personal_trainer.png",
      altImg: "Personal Trainer"
    },
    {
      link: './service',
      type: "Yoga",
      srcImg: "/assets/img/home/yoga.png",
      altImg: "Yoga"
    },
    {
      link: './service',
      type: "Group X",
      srcImg: "/assets/img/home/group_x.png",
      altImg: "Group X"
    },
    {
      link: './service',
      type: "Boxing",
      srcImg: "/assets/img/home/boxing1.png",
      altImg: "Boxing"
    },
  ]

  @Input() isHasHeader = true;
}
