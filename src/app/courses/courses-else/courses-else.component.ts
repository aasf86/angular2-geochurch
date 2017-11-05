import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-else',
  templateUrl: './courses-else.component.html',
  styleUrls: ['./courses-else.component.css']
})
export class CoursesElseComponent implements OnInit {

  flag:boolean = false;

  constructor() { }

  toogleFlag(){
    this.flag=!this.flag;
  }

  ngOnInit() {
  }

}
