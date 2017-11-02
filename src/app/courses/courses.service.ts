import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {
  
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

  deleteAll(){
    localStorage.setItem('planets','[]');
  }
}
