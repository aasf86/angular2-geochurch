import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoursesModule } from './courses/courses.module';
import { CrudComponent } from './crud/crud.component';
import { CrudModule } from './crud/crud.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,/*
    CoursesModule,*/
    CrudModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
