import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  path = '';
  msg:string = 'message';
  user:any = null;
  linkGPlus:string = '';

  ngOnInit(){
    var result = JSON.parse(localStorage.getItem('user'));
    this.user = result.user;//additionalUserInfo.profile.link  
    this.linkGPlus = result.additionalUserInfo.profile.link;
    console.log(this.user);
  }  

  logout(){
    this.user = null;
    localStorage.setItem('user', null);
    location.reload();
  }
}

