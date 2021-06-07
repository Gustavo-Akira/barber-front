import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarberPage } from './barber/barber.page';
import { BarberRoutingModule } from './barber-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    BarberPage
  ],
  imports: [
    CommonModule,
    BarberRoutingModule,
    HttpClientModule
  ]
})
export class BarberModule { }
