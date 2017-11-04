import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesOutputComponent } from './courses-output.component';

describe('CoursesOutputComponent', () => {
  let component: CoursesOutputComponent;
  let fixture: ComponentFixture<CoursesOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
