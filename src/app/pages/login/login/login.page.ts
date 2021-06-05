import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login } from 'src/app/shared/states/action/auth.actions';

import { LoginDTO, LoginService } from '../service/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.sass']
})
export class LoginPage implements OnInit {
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
  constructor(private store:Store,private router: Router) { 
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.store.dispatch(login(this.loginForm.value));
  }

  controler(name:string){
    return this.loginForm.get(name) as FormControl;
  }
}
