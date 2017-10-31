import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponent2Component } from './first-component2.component';

describe('FirstComponent2Component', () => {
  let component: FirstComponent2Component;
  let fixture: ComponentFixture<FirstComponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstComponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
