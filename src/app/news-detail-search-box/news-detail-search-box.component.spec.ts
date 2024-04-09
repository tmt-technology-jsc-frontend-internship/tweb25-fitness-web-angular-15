import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetailSearchBoxComponent } from './news-detail-search-box.component';

describe('NewsDetailSearchBoxComponent', () => {
  let component: NewsDetailSearchBoxComponent;
  let fixture: ComponentFixture<NewsDetailSearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NewsDetailSearchBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsDetailSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
