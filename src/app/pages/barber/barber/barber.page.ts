import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  styleUrls: ['./barber.page.sass'],
})
export class BarberPage implements OnInit {

  barber!: Barber;
  showModal: boolean = false;

  clientName: string = '';

  constructor(private service: BarberService, private clientservice: ClientService, private store: Store<{login: State}>,private ref: ChangeDetectorRef) { 7
  }

  ngOnInit(): void {
    this.loadBarberData();
  }

  isClientNull(): boolean{
    return this.barber.clients == null;
  }

  saveClient(){
    this.clientservice.saveClient(this.clientName).subscribe(
      client =>{
        this.barber.clients?.push(client);
      }
    );
    this.changeShowModal();
  }

  changeShowModal(){
    this.showModal = !this.showModal;
  }

  loadBarberData(){
    this.service.getLoggedInUser().subscribe(logged =>{
      this.barber = logged;
    });
    this.clientservice.getClients().subscribe(clients =>{
      this.barber.clients = clients;
    });
  }

  trackClient(index: number,client:Client){
    return client.id;
  }
}
