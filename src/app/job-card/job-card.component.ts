import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositionInfo, PositionInfoTitle } from '../classes';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent {
  @Input() job!:PositionInfo;

  infoTitle: Array<PositionInfoTitle> = [
    {
      icon: "twi-25-user-line",
      title: "Số lượng"
    },
    {
      icon: "twi-25-clock-line",
      title: "Hình thức làm việc"
    },
    {
      icon: "twi-25-location-line",
      title: "Nơi làm việc"
    },
  ]
}
