import { Directive, ElementRef, Renderer } from '@angular/core';
/*
import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';
import * as popper from 'popper.js';
*/

@Directive({
  selector: '[data-toggle]'
})
export class DataToggle {

  constructor(
    private _elementRef:ElementRef,
    private _renderer:Renderer
  ) { 
    /*
    setTimeout(() => {      
      console.log($);
      console.log(bootstrap);      
      console.log(popper);      
      console.log($(this._elementRef.nativeElement));
    });    
    */
  }
}
