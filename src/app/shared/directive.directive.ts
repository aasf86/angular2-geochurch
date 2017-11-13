import { Directive, ElementRef, Renderer, Input } from '@angular/core';
/*
import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';
import * as popper from 'popper.js';
*/

@Directive({
  selector: '[data-toggle]'
})
export class DataToggle {

  @Input('data-toggle')
  dataToggle:string;

  constructor(
    private _elementRef:ElementRef,
    private _renderer:Renderer
  ) { 
    console.log(this._elementRef.nativeElement);
    console.log(this.dataToggle);
    /*
    setTimeout(() => {      
      console.log($);
      console.log(bootstrap);      
      console.log(popper);      
      console.log($(this._elementRef.nativeElement));
    });    
    */
  }
  ngOnInit(){
    console.log(this._elementRef.nativeElement);
    console.log(this.dataToggle);    
  }
}
