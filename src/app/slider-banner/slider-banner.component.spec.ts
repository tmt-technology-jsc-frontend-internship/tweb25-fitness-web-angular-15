import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderBannerComponent } from './slider-banner.component';

describe('SliderBannerComponent', () => {
  let component: SliderBannerComponent;
  let fixture: ComponentFixture<SliderBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
