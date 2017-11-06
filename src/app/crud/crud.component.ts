import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit, OnDestroy {

  id:string;
  subscription:Subscription;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => this.id = params.id);
  }

  ngOnDestroy(): void {    
    this.subscription.unsubscribe();
  }  
}
