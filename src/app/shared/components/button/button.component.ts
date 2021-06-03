import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent implements OnInit {
  
  @Input()
  onSubmit!: string;

  @Input()
  btnType!:string;

  @Input()
  value!:string;

  @Input()
  form: FormGroup = new FormGroup({});

  @Output()
  event = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.event.emit();
  }
  get invalid(){
    if(this.form.invalid){
      return true;
    }
    return false;
  }
}
