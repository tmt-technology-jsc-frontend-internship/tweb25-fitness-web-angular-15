import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-share',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-share.component.html',
  styleUrls: ['./icon-share.component.scss']
})
export class IconShareComponent {
  @Input() iconClass!: string;
  @Input() hoverBgColor!: string;
  @Input() hoverTextColor!: string;

  iconClass_hoverClass(){
    return this.iconClass + " " +this.hoverBgColor + " " +this.hoverTextColor;
  }
}
