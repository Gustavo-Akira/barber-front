import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import Barber from 'src/app/shared/models/barber.model';
import Client from 'src/app/shared/models/client.model';
import { State } from 'src/app/shared/states/reducer/auth.reducer';
import { BarberService } from '../service/barber.service';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-barber',
  templateUrl: './barber.page.html',
  styleUrls: ['./barber.page.sass']
})
export class BarberPage implements OnInit {

  barber!: Barber;
  showModal: boolean = false;

  clientName: string = '';

  constructor(private service: BarberService, private clientservice: ClientService, private store: Store<{login: State}>) { }

  ngOnInit(): void {
    this.service.getLoggedInUser().subscribe(logged =>{
      this.barber = logged;
    });
  }

  isClientNull(): boolean{
    return this.barber.clients?.length == 0;
  }

  saveClient(){
    this.clientservice.saveClient(this.clientName);
  }
}
