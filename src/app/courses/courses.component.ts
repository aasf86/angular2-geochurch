import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';
import { NumberValueAccessor } from '@angular/forms/src/directives';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = Math.random().toString().split('.')[1];
  items = [];

  localValue:number = 15;

  constructor(private service:CoursesService) { }

  deleteAll(){
    this.service.deleteAll()
  }

  lastName(){
    if(this.items && this.items.length > 0)
      return this.items[this.items.length-1].name    
    return '';    
  }

  onChangeValue($event){
    this.localValue = $event;    
  }

  deleteItem(item) {
    if(confirm('Do you sure to want delete item?')){
      this.service.deleteItem(item);
    }
  }

  ngOnInit() {
    this.items = this.service.getAll();
    this.service.trigger.subscribe((list)=>{
      this.items = list;
    });    
  }
}

