import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarberPage } from './barber/barber.page';

const routes: Routes = [
    {path: '', component:BarberPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarberRoutingModule { }