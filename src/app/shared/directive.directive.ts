import { Directive, ElementRef, Renderer, Input, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';
import * as popper from 'popper.js';

const tooggleTooltip:string = 'toggle-tooltip';

@Directive({
  selector: '['+tooggleTooltip+']'
})
export class DataToggleDirective implements AfterViewInit  {  

  @Input(tooggleTooltip) 
  msg:string;

  constructor(
    private _elementRef:ElementRef,
    private _renderer:Renderer
  ) { }

  ngOnInit(){

  }

  ngAfterViewInit(): void {
    
    console.log(tooggleTooltip);
    console.log(this._elementRef.nativeElement);
    console.log(this.msg);    

    setTimeout(() => {

      debugger;

      //$(this._elementRef.nativeElement).tooltip({ title: this.msg });
      console.log($);
      console.log(bootstrap);
      console.log(popper);

      
    }, 1000);
  }  
}
/*
@Directive({
  selector: '[toggleTooltip]'
})
export class ToggleTooltipDirective {

  @Input('toggleTooltip')
  toggleTooltip:string;

  constructor(
    private _elementeRef:ElementRef,
    private _renderer:Renderer
  ) { }

  ngOnInit(){
    console.log('toggleTooltip');
    console.log(this.toggleTooltip);
    console.log(this._elementeRef.nativeElement);    
  }
}
*/