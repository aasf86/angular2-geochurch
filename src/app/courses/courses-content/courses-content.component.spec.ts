import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesContentComponent } from './courses-content.component';

describe('CoursesContentComponent', () => {
  let component: CoursesContentComponent;
  let fixture: ComponentFixture<CoursesContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
