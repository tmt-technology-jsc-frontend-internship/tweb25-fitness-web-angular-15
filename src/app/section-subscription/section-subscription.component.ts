import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionCard } from '../classes';
import { SubscriptCardComponent } from '../subscript-card/subscript-card.component';

@Component({
  selector: 'app-section-subscription',
  standalone: true,
  imports: [CommonModule, SubscriptCardComponent],
  templateUrl: './section-subscription.component.html',
  styleUrls: ['./section-subscription.component.scss']
})
export class SectionSubscriptionComponent {
  @Output() scrollToRegister = new EventEmitter<boolean>();

  cards: Array<SubscriptionCard> =[
    {
      month: 6,
      total: 11025000,
      perMonth: 787000,
      describe: "Rhoncus, est lectus malesuada et. Adipiscing praesent sit amet, quam dignissim a interdum enim."
    },
    {
      month: 12,
      total: 11025000,
      perMonth: 787000,
      describe: "Rhoncus, est lectus malesuada et. Adipiscing praesent sit amet, quam dignissim a interdum enim."
    },
    {
      month: 18,
      total: 11025000,
      perMonth: 787000,
      describe: "Rhoncus, est lectus malesuada et. Adipiscing praesent sit amet, quam dignissim a interdum enim."
    },
  ]

  register(){
    this.scrollToRegister.emit(true);
  }
}
