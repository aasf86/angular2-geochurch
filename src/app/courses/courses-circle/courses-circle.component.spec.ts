import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesCircleComponent } from './courses-circle.component';

describe('CoursesCircleComponent', () => {
  let component: CoursesCircleComponent;
  let fixture: ComponentFixture<CoursesCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
