import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetailShareBarComponent } from './news-detail-share-bar.component';

describe('NewsDetailShareBarComponent', () => {
  let component: NewsDetailShareBarComponent;
  let fixture: ComponentFixture<NewsDetailShareBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NewsDetailShareBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsDetailShareBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
