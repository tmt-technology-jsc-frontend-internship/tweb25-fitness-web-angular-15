import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetailRelatedNewsComponent } from './news-detail-related-news.component';

describe('NewsDetailRelatedNewsComponent', () => {
  let component: NewsDetailRelatedNewsComponent;
  let fixture: ComponentFixture<NewsDetailRelatedNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NewsDetailRelatedNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsDetailRelatedNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
