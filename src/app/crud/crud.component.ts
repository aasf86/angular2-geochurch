import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit, OnDestroy {

  id:number;
  subscription:Subscription;

  constructor(
    private route:ActivatedRoute,
    private router:Router) { }

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
