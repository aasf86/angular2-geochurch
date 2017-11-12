import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report.component';
import { RouterModule } from '@angular/router';
import { ReportListComponent } from './report-list/report-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:[RouterModule.forChild([
    { path: '#/report', component: ReportComponent },
    { path: '#/report/list', component: ReportListComponent },
    { path: '#/report/:id', component: ReportComponent }/*,
    { path: '', component: ReportComponent }*/
  ])],
  exports:[RouterModule],
  declarations: []
})
export class ReportRouterModule { }

@NgModule({
  imports: [
    CommonModule,    
    ReportRouterModule
  ],
  declarations: [ReportComponent, ReportListComponent]
})
export class ReportModule { }
