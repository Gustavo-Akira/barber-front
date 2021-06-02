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
    const {touched, errors} = this.control;
    return touched && errors;
  }

  get class(){
    if(this.showErrors()){
      return 'error';
    }else if(this.control.dirty){
      return 'accepted';
    }
    return '';
  }
}
