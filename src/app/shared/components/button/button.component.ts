import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent implements OnInit {
  
  @Input()
  onSubmit!: Function;

  @Input()
  btnType!:string;

  @Input()
  value!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
