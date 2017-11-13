import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { User } from '../../model/user';
//import { SharedModule } from '../../shared/shared.module'

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.css']
})
export class CrudListComponent implements OnInit {
  tooltip = 'my messages';
  name = '';
  email = '';
  phone = '';
  list = [];
  listBack = [];
  
  constructor(private service:CrudService) { }
  
  ngOnInit() {
    this.service.selectAll(source => {
      this.list = source; 
      this.listBack = source;
      this.search();
    });
  }

  removeUser(item:User){
    this.service.delete(item);
  }

  clearFilter(){
    this.name =
    this.email =
    this.phone = '';
    this.list = this.listBack;
  }

  searchName(){
    if(!this.name) this.list = this.listBack;
    this.list = this.listBack.filter(x=>x.name.indexOf(this.name) > -1);
  }

  searchEmail(){
    if(!this.email) this.list = this.listBack;
    this.list = this.listBack.filter(x=>x.email.indexOf(this.email) > -1);
  }

  searchPhone(){
    if(!this.phone) this.list = this.listBack;
    this.list = this.listBack.filter(x=>x.phone.indexOf(this.phone) > -1);
  }

  search(){
    if(this.name){
      this.list = this.list.filter(x=>x.name.indexOf(this.name) > -1);
    }

    if(this.email){
      this.list = this.list.filter(x=>x.email.indexOf(this.email) > -1);    
    }

    if(this.phone){
      this.list = this.list.filter(x=>x.phone.indexOf(this.phone) > -1);    
    }
  }
}
