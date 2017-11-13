import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud/crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _services:CrudService) { }

  ngOnInit() {
  }

  login(){
    this._services.login();
  }

}
