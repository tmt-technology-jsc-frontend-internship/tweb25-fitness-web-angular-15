import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetailHeadingComponent } from './news-detail-heading.component';

describe('NewsDetailHeadingComponent', () => {
  let component: NewsDetailHeadingComponent;
  let fixture: ComponentFixture<NewsDetailHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NewsDetailHeadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsDetailHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
