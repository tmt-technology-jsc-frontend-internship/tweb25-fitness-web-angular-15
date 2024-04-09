import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionRecruitComponent } from './section-recruit.component';

describe('SectionRecruitComponent', () => {
  let component: SectionRecruitComponent;
  let fixture: ComponentFixture<SectionRecruitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SectionRecruitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionRecruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
