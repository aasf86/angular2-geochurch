import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import * as tippy from 'tippy.js';

const tooggleTooltip:string = 'tippy';

@Directive({
  selector: '['+tooggleTooltip+']'
})
export class DataToggleDirective implements AfterViewInit  {  

  @Input(tooggleTooltip) 
  msg:string;

  constructor(private _elementRef:ElementRef) { }

  ngAfterViewInit(): void {
      if(this.msg) this._elementRef.nativeElement.setAttribute('title', this.msg);
      tippy(this._elementRef.nativeElement, {theme: 'light', animation: 'scale', arrow: true});
  }  
}