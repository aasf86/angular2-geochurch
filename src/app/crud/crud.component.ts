import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { User } from '../model/user';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit, OnDestroy {  
  id:number;
  subscription:Subscription;
  name = '';
  email = '';
  phone = '';

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private service:CrudService
  ) { }

  addUser(){
    var user:User = new User(this.name, this.email, this.phone);
    this.service.insert(user);
    this.name =
    this.email =
    this.phone = '';
  }

  navigate(){
    this.id++;
    this.router.navigate(['/crud',this.id.toString()]);    
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => this.id = params.id);
  }

  ngOnDestroy(): void {    
    this.subscription.unsubscribe();
  }  
}
