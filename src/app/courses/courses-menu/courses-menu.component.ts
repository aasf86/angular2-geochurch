import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-menu',
  templateUrl: './courses-menu.component.html',
  styleUrls: ['./courses-menu.component.css']
})
export class CoursesMenuComponent implements OnInit {

  tab:string = 'Home';

  constructor() { }

  ngOnInit() {
  }

}
