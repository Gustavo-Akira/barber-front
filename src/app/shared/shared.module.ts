import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { ModalComponent } from './components/modal/modal.component';
import { PaginationComponent } from './components/pagination/pagination.component';



@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    ModalComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    InputComponent,
    ButtonComponent,
    ModalComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
