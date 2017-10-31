import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  titleRandom = Math.random().toString().split('.')[1];


  constructor() { }

  ngOnInit() {
  }

}
