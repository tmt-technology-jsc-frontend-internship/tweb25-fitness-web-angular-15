import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptCardComponent } from './subscript-card.component';

describe('SubscriptCardComponent', () => {
  let component: SubscriptCardComponent;
  let fixture: ComponentFixture<SubscriptCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SubscriptCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
