import { Component, OnInit } from '@angular/core';

interface LoginDTO{
  username:string,
  password:string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.sass']
})
export class LoginPage implements OnInit {
  loginModel: LoginDTO;
  constructor() { 
    this.loginModel = {
      username:"",
      password:""
    }
  }

  ngOnInit(): void {
  }

}
