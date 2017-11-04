import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-courses-output',
  templateUrl: './courses-output.component.html',
  styleUrls: ['./courses-output.component.css']
})
export class CoursesOutputComponent implements OnInit {

  @Input()
  value:number = 0;

  @Output()
  changeValue:EventEmitter<any> = new EventEmitter();

  constructor() { }

  minus(){    
    if(this.value == 0) return;
    this.value--;
    this.changeValue.emit(this.value.toString());
  }

  more(){    
    this.value++;
    this.changeValue.emit(this.value.toString());
  }

  ngOnInit() {

  }

}
