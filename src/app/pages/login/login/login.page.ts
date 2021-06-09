import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login, loginRefresh } from 'src/app/shared/states/action/auth.actions';
import { State } from 'src/app/shared/states/reducer/auth.reducer';

import { LoginDTO, LoginService } from '../service/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.sass']
})
export class LoginPage implements OnInit {
  error = false;
  
  loginForm:FormGroup = new FormGroup({
    username:new FormControl('',
      [
        Validators.required
      ]
    ),
    password:new FormControl('',[
      Validators.required,
      Validators.min(3)
    ])
  });
  constructor(private store:Store<{login: State}>) { 
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.store.dispatch(login(this.loginForm.value));
  }

  controler(name:string){
    return this.loginForm.get(name) as FormControl;
  }

  getError(){
    this.store.subscribe(x=> this.error=x.login.error);
    return this.error;
  }

  onDimiss(){
    this.store.dispatch(loginRefresh());
  }
}
