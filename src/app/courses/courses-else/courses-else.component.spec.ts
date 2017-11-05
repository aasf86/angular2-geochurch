import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesElseComponent } from './courses-else.component';

describe('CoursesElseComponent', () => {
  let component: CoursesElseComponent;
  let fixture: ComponentFixture<CoursesElseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesElseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
