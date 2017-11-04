import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesComponent } from './courses.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';
import { CoursesService } from './courses.service';
import { CoursesAddComponent } from './courses-add/courses-add.component';
import { FormsModule } from '@angular/forms';
import { CoursesBindingComponent } from './courses-binding/courses-binding.component';
import { CoursesOutputComponent } from './courses-output/courses-output.component';

@NgModule({
  imports: [
    CommonModule,    
    FormsModule
  ],
  declarations: [CoursesComponent, CoursesDetailComponent, CoursesAddComponent, CoursesBindingComponent, CoursesOutputComponent],
  exports:[CoursesComponent, CoursesDetailComponent, CoursesAddComponent],
  providers:[CoursesService]
})
export class CoursesModule { }
