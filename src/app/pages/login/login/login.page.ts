import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  constructor(private service: LoginService) { 
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.service.login(this.loginForm.value).subscribe((data)=>{
      console.log(data);
    });
  }

  controler(name:string){
    return this.loginForm.get(name) as FormControl;
  }
}
