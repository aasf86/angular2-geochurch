import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-courses-circle',
  templateUrl: './courses-circle.component.html',
  styleUrls: ['./courses-circle.component.css']
})
export class CoursesCircleComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('CoursesCircleComponent: i am here');
  }

  ngOnDestroy(): void {
    console.log('CoursesCircleComponent: i am dying');
  }  

}
