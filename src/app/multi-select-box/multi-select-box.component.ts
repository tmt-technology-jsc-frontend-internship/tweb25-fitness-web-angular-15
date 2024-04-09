import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { selectBox } from '../classes';

@Component({
  selector: 'app-multi-select-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './multi-select-box.component.html',
  styleUrls: ['./multi-select-box.component.scss']
})
export class MultiSelectBoxComponent {
  @Input() selects!:Array<selectBox>;
}
