import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarberPage } from './barber/barber.page';
import { BarberRoutingModule } from './barber-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BarberPage
  ],
  imports: [
    CommonModule,
    BarberRoutingModule,
    HttpClientModule,
    SharedModule,
    FormsModule
  ]
})
export class BarberModule { }
