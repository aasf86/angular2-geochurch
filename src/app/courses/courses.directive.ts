import { 
  Directive, 
  ElementRef, 
  Renderer, 
  Renderer2,
  HostListener } from '@angular/core';

@Directive({
  selector: '[appCourses]'
})
export class CoursesDirective {

  constructor(private _elementRef:ElementRef, private _renderer:Renderer) {     
    
    //this code below dont is recomendaded
    //_elementRef.nativeElement.className = 'alert alert-success';


    //this code below is correct, it shoulda been insert on the file
    _renderer.setElementAttribute(_elementRef.nativeElement, 'class', 'alert alert-success');
  }
}

@Directive({
  selector: 'p[highight]'
})
export class HighightCoursesDirective {

  @HostListener('mouseover')
  onMouseOver(){    
    this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'red');
  }

  @HostListener('mouseout')
  onMouseOut(){    
    this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'white');
  }

  constructor(
    private _elementRef:ElementRef, 
    private _renderer:Renderer) { }
}

