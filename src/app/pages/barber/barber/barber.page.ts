import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import Barber from 'src/app/shared/models/barber.model';
import { State } from 'src/app/shared/states/reducer/auth.reducer';
import { BarberService } from '../service/barber.service';

@Component({
  selector: 'app-barber',
  templateUrl: './barber.page.html',
  styleUrls: ['./barber.page.sass']
})
export class BarberPage implements OnInit {

  barber!: Barber;

  constructor(private service: BarberService, private store: Store<{login: State}>) { }

  ngOnInit(): void {
    this.service.getLoggedInUser().subscribe(logged =>{
      this.barber = logged;
    });
  }

  isClientNull(): boolean{
    return this.barber.clients?.length == 0;
  }
}
