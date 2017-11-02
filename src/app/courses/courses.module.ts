import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesComponent } from './courses.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';
import { CoursesService } from './courses.service';
import { CoursesAddComponent } from './courses-add/courses-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CoursesComponent, CoursesDetailComponent, CoursesAddComponent],
  exports:[CoursesComponent, CoursesDetailComponent, CoursesAddComponent],
  providers:[CoursesService]
})
export class CoursesModule { }
