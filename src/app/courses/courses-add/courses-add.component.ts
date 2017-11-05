import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
//import { AlertModule } from 'ngx-bootstrap';

@Component({
  selector: 'app-courses-add',
  templateUrl: './courses-add.component.html',
  styleUrls: ['./courses-add.component.css']
})
export class CoursesAddComponent implements OnInit {

  
  id:string = '';
  name:string = 'anderson';

  constructor(private service:CoursesService) { }

  addPlanet() {    
    this.service.add({id: Math.random().toString().split('.')[1], name: this.name});
    this.name = '';
  }

  ngOnInit() {

  }

}
