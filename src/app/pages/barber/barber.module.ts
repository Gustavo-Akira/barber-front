import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarberPage } from './barber/barber.page';
import { BarberRoutingModule } from './barber-routing.module';



@NgModule({
  declarations: [
    BarberPage
  ],
  imports: [
    CommonModule,
    BarberRoutingModule
  ]
})
export class BarberModule { }
