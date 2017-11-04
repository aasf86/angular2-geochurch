import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-courses-binding',
  templateUrl: './courses-binding.component.html',
  styleUrls: ['./courses-binding.component.css']
})
export class CoursesBindingComponent implements OnInit {

  @Input()
  name:string = '';
  
  constructor() { }

  ngOnInit() {
  }

}
