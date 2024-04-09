import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLikeShareComponent } from './news-like-share.component';

describe('NewsLikeShareComponent', () => {
  let component: NewsLikeShareComponent;
  let fixture: ComponentFixture<NewsLikeShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NewsLikeShareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsLikeShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
