import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionQuotComponent } from './section-quot.component';

describe('SectionQuotComponent', () => {
  let component: SectionQuotComponent;
  let fixture: ComponentFixture<SectionQuotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SectionQuotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionQuotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
