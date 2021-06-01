import { Component, OnInit } from '@angular/core';

import { LoginDTO, LoginService } from '../service/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.sass']
})
export class LoginPage implements OnInit {
  loginModel: LoginDTO;
  constructor(private service: LoginService) { 
    this.loginModel = {
      username:"",
      password:""
    }
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.service.login(this.loginModel).subscribe((data)=>{
      console.log(data);
    });
  }
}
