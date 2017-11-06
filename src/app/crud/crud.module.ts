import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

import { CrudComponent } from './crud.component';
import { CrudService } from './crud.service';

@NgModule({
  imports:[RouterModule.forChild([
    { path: 'crud', component: CrudComponent },
    { path: 'crud/:id', component: CrudComponent },
    { path: 'home', component: CrudComponent },
    { path: '', component: CrudComponent }
  ])],
  exports:[RouterModule]
})
export class CrudRouterModule { }

@NgModule({
  imports: [
    CommonModule,    
    FormsModule,
    CrudRouterModule
  ],
  declarations: [CrudComponent],  
  exports:[CrudComponent],  
  providers:[CrudService]
})
export class CrudModule { }




