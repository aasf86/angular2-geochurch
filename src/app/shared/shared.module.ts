import { NgModule } from '@angular/core';
import { DataToggleDirective } from './directive.directive';

@NgModule({  
  declarations: [DataToggleDirective],
  exports: [DataToggleDirective]
})
export class SharedModule { }
