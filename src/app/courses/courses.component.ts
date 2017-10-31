import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = Math.random().toString().split('.')[1];
  items = [];

  constructor(private service:CoursesService) { 

    this.items = this.service.getAll();

  }

  ngOnInit() {
  }

}

