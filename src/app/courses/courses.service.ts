import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class CoursesService {
  
  @Output()
  trigger:EventEmitter<Array<any>> = new EventEmitter()

  constructor() { }

  private getCoursesList():Array<any>{
    var planets = localStorage.getItem('planets');
    
        if(planets){
          return JSON.parse(planets);
        }
        else
        {
          var arPlanets = [{ name: 'earth'},{ name: 'jupther'}];
          localStorage.setItem('planets', JSON.stringify(arPlanets));
          return arPlanets;
        } 
  }

  private setList(list:Array<any>){
    localStorage.setItem('planets', JSON.stringify(list));
    this.trigger.emit(list);
  }

  private addCourse(course:any){
    var list = this.getCoursesList();
    list.push(course);
    this.setList(list);
  }

  getAll():Array<any>{
   return this.getCoursesList();
  }

  add(course:any){
    this.addCourse(course);
  }

  deleteItem(course:any){    
    var list = this.getCoursesList().filter((item) => item.id != course.id);
    this.setList(list);
  }
  deleteAll(){
    this.setList([]);
  }
}
