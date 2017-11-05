import { 
  Directive, 
  ElementRef, 
  Renderer, 
  Renderer2,
  HostListener, 
  HostBinding,
  TemplateRef,
  ViewContainerRef,
  Input} from '@angular/core';

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
  selector: 'p[highLight]'
})
export class HighLightCoursesDirective {

  constructor(
    private _elementRef:ElementRef, 
    private _renderer:Renderer) { }

  @HostListener('mouseover')
  onMouseOver(){    
    this.setColor('red');
  }

  @HostListener('mouseout')
  onMouseOut(){    
    this.setColor('white');
  }

  private setColor(color:string):void{
    this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', color);
  }
}

@Directive({
  selector: 'p[highLightBatman]'
})
export class HighLightBatmanCoursesDirective {

  constructor(
    private _elementRef:ElementRef, 
    private _renderer:Renderer) { }

  @HostListener('mouseover')
  onMouseOver(){    
    this.backgroundColor = 'black';
    this.color = 'white';
  }

  @HostListener('mouseout')
  onMouseOut(){    
    this.backgroundColor = 'white';
    this.color = 'black';
  }

  @HostBinding('style.backgroundColor')  
  backgroundColor:string;

  @HostBinding('style.color')
  color:string;
}

@Directive({
  selector: '[ngElse]'
})
export class ElseCoursesDirective {

  constructor(
    private _templateRef:TemplateRef<any>, 
    private _viewContainerRef:ViewContainerRef) { }

  @Input() set ngElse(condition:boolean) {
    if(!condition) {
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    }
    else {
      this._viewContainerRef.clear();
    }
  }
}
