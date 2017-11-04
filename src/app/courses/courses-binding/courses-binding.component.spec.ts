import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesBindingComponent } from './courses-binding.component';

describe('CoursesBindingComponent', () => {
  let component: CoursesBindingComponent;
  let fixture: ComponentFixture<CoursesBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
