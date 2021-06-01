import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent {

  @Input() control!: FormControl;
  @Input() label!: string;
  @Input() input!: string;
  @Input() type: string = 'input';
  constructor() { }

  showErrors(){
    const {dirty, touched, errors} = this.control;
    return dirty && touched && errors;
  }

  get class(){
    if(this.showErrors() && this.control.touched){
      return 'error';
    }else if(!this.showErrors() && this.control.touched){
      return 'accepted';
    }else{
      return '';
    }
  }
}
