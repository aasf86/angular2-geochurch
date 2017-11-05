import { NgModule } from '@angular/core';
import { CrudComponent } from './crud.component';
import { CrudService } from './crud.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,    
    FormsModule
  ],
  declarations: [CrudComponent],  
  exports:[CrudComponent],  
  providers:[CrudService]
})
export class CrudModule { }
