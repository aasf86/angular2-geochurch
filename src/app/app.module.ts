import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoursesModule } from './courses/courses.module';
import { CrudComponent } from './crud/crud.component';
import { CrudModule } from './crud/crud.module';
import { AppRouterModule } from './app.router';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';
import { ReportModule } from './report/report.module';
//import { ReportModule } from './report/report.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,/*
    CoursesModule,*/
    CrudModule,
    LoginModule,
    AppRouterModule,
    SharedModule,
    ReportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
