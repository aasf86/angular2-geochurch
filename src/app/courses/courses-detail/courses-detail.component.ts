import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.css']
})
export class CoursesDetailComponent implements OnInit {

  titleRandom:string = '';

  constructor() {     
    debugger;    
    var strNumber = Math.random().toString().split('.')[1];
    var rest = strNumber.length/2;
    var loop = Math.round(rest)-1;

    for (var index = 0; index < loop; index = index+2) {
      this.titleRandom += String.fromCharCode(+strNumber.substr(index, 2));
    }
  }

  ngOnInit() {
  }

}
