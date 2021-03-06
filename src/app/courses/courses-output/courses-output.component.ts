import { 
  Component, 
  OnInit, 
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef } from '@angular/core';

@Component({
  selector: 'app-courses-output',
  templateUrl: './courses-output.component.html',
  styleUrls: ['./courses-output.component.css']
})
export class CoursesOutputComponent implements OnInit, OnChanges {


  @Input()
  value:number = 0;

  @Output()
  changeValue:EventEmitter<any> = new EventEmitter();

  @ViewChild('inputView')
  inputField:ElementRef  

  constructor() { }

  minus(){    
    if(this.value == 0) return;
    this.value--;
    this.changeValue.emit(this.value.toString());  
    console.log(this.inputField);  
  }

  more(){    
    this.value++;
    this.changeValue.emit(this.value.toString());
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('CoursesOutputComponent: i am changed');    
  }
}
