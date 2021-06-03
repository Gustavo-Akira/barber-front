import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import Barber from 'src/app/shared/models/barber.model';
import { LoginService } from '../service/login.service';
import  unique  from '../validators/unique.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.sass']
})
export class SignupPage implements OnInit {
  signupFormGroup: FormGroup = new FormGroup({
    name: new FormControl('',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[a-z]+$/)
      ]
    ),
    username: new FormControl('',
      [
        Validators.pattern(/^[a-z0-9]+$/),
        Validators.required
      ],
      [
        unique(this.service)
      ],
    ),
    color: new FormControl(''),
    password: new FormControl('',
      [
        Validators.required,
        Validators.minLength(12),
        Validators.maxLength(20)
      ]
    )
  });
  constructor(private service: LoginService) { }

  ngOnInit(): void {
  }

  onSend(){
    this.service.signup(this.signupFormGroup.value).subscribe((barber: Barber)=>{
      console.log(barber);
    });
  }

  onCancel(){
    console.log('cancel');
  }
  
  controler(name:string){
    return this.signupFormGroup.get(name) as FormControl;
  }
}
