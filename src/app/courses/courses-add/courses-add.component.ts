import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { AlertModule } from 'ngx-bootstrap';

@Component({
  selector: 'app-courses-add',
  templateUrl: './courses-add.component.html',
  styleUrls: ['./courses-add.component.css']
})
export class CoursesAddComponent implements OnInit {

  
  id = Math.random().toString().split('.')[1];
  name = '';

  constructor(private service:CoursesService) { }

  addPlanet() {
    debugger;
    this.service.add({id: this.id, name: this.name});
  }

  ngOnInit() {

  }

}
