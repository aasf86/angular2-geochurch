import { Directive, ElementRef, Renderer, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCourses]'
})
export class CoursesDirective {

  constructor(private _elementRef:ElementRef, private _renderer:Renderer2) {     
    //_renderer.addClass(_elementRef, 'alert alert-success');
  }
}

@Directive({
  selector: '[highight]'
})
export class HighightCoursesDirective {

  constructor(private _elementRef:ElementRef, private _renderer:Renderer2) {     
    
    //this code below dont is recomendaded
    _elementRef.nativeElement.className = 'alert alert-success';

    //this code below is correct, it shoulda been insert on the file
    //_renderer.addClass(_elementRef, 'alert alert-success');
  }
}

