import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  path = '';
  msg:string = 'message';
  user:any;

  ngOnInit(){    
    this.user = JSON.parse(localStorage.getItem('user'));    
  }  
}

