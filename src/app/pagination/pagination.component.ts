import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule } from '@angular/router';
import { PaginationItem } from '../classes';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input('noParam') isActivateNoParam:boolean = false;
  @Input() pages!: Array<PaginationItem>;
  @Input() pageRoot!: string;

}
