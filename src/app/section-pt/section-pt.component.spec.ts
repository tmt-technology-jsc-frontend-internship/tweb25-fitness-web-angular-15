import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPtComponent } from './section-pt.component';

describe('SectionPtComponent', () => {
  let component: SectionPtComponent;
  let fixture: ComponentFixture<SectionPtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SectionPtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionPtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
