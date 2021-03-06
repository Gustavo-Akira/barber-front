import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home/home.page';

const routes: Routes = [
  {path:"",component: HomePage},
  {path:"login", loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  {path:"barber", loadChildren: () => import('./pages/barber/barber.module').then(m => m.BarberModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
