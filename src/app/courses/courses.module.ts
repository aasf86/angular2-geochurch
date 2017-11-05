import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoursesComponent } from './courses.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';
import { CoursesService } from './courses.service';
import { CoursesAddComponent } from './courses-add/courses-add.component';
import { CoursesBindingComponent } from './courses-binding/courses-binding.component';
import { CoursesOutputComponent } from './courses-output/courses-output.component';
import { CoursesCircleComponent } from './courses-circle/courses-circle.component';
import { CoursesMenuComponent } from './courses-menu/courses-menu.component';
import { CoursesContentComponent } from './courses-content/courses-content.component';
import { CoursesElseComponent } from './courses-else/courses-else.component';

import { 
  CoursesDirective, 
  HighLightCoursesDirective,
  HighLightBatmanCoursesDirective,
  ElseCoursesDirective } from './courses.directive';

@NgModule({
  imports: [
    CommonModule,    
    FormsModule
  ],
  declarations: [
    CoursesComponent, 
    CoursesDetailComponent, 
    CoursesAddComponent, 
    CoursesBindingComponent, 
    CoursesOutputComponent, 
    CoursesCircleComponent, 
    CoursesMenuComponent, 
    CoursesContentComponent, 
    CoursesDirective,
    HighLightCoursesDirective,
    HighLightBatmanCoursesDirective,
    CoursesElseComponent,
    ElseCoursesDirective
  ],
  exports:[
    CoursesComponent
  ],
  providers:[CoursesService]
})
export class CoursesModule { }
