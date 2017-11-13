import { NgModule, TemplateRef } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

import { CrudComponent } from './crud.component';
import { CrudService } from './crud.service';
import { CrudListComponent } from './crud-list/crud-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports:[RouterModule.forChild([
    { path: '#/crud', component: CrudComponent },
    { path: '#/crud/:id', component: CrudComponent },
    { path: '#/home', component: CrudComponent }/*,
    { path: '', component: CrudComponent }*/
  ])],
  exports:[RouterModule],
  declarations: []
})
export class CrudRouterModule { }

@NgModule({
  imports: [
    CommonModule,    
    FormsModule,
    CrudRouterModule,
    SharedModule
  ],
  declarations: [CrudComponent, CrudListComponent],  
  exports:[CrudComponent],  
  providers:[CrudService]
})
export class CrudModule { }




