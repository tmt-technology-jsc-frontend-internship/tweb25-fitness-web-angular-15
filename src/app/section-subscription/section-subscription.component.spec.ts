import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSubscriptionComponent } from './section-subscription.component';

describe('SectionSubscriptionComponent', () => {
  let component: SectionSubscriptionComponent;
  let fixture: ComponentFixture<SectionSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SectionSubscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
