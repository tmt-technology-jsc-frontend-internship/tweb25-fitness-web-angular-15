import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsXtraInfoComponent } from './news-xtra-info.component';

describe('NewsXtraInfoComponent', () => {
  let component: NewsXtraInfoComponent;
  let fixture: ComponentFixture<NewsXtraInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NewsXtraInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsXtraInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
