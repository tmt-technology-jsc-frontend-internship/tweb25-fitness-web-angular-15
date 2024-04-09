import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionCard } from '../classes';


@Component({
  selector: 'app-subscript-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subscript-card.component.html',
  styleUrls: ['./subscript-card.component.scss']
})
export class SubscriptCardComponent {
  @Input() card!: SubscriptionCard;
  @Output() scrollToRegister = new EventEmitter<boolean>();


  register(){
    this.scrollToRegister.emit(true);
  }
}
