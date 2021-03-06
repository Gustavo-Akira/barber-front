import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { delay } from 'rxjs/operators';
import { LoadService } from './shared/service/load.service';
import { State } from './shared/states/reducer/auth.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'barber';
  isMenuCollapsed: boolean = true;
  logged = false;
  
  constructor( private router: Router, private store: Store<{login:State}>){
    this.store.select('login').subscribe(x=>{
      if(x.token!="null"){
        this.logged = true;
        this.router.navigateByUrl('/barber');
      }
    });
  }

  ngOnInit() {

  }
}
