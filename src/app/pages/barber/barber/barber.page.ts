import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { delay } from 'rxjs/operators';

import Barber from 'src/app/shared/models/barber.model';
import Client from 'src/app/shared/models/client.model';
import { LoadService } from 'src/app/shared/service/load.service';
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

  update:Client | undefined;

  clientName: string = '';

  buttonText: string = "Add";

  title: string = "Add";

  numberofPages: number = 0;
  
  actualPage: number = 0;
  
  loading: boolean = false;

  barberForm:FormGroup = new FormGroup({
    name: new FormControl('',
      [Validators.required]
    ),
    username: new FormControl('',
      [Validators.required]
    ),
    color: new FormControl('',
      [Validators.required]
    ),
    password: new FormControl(''),
  })

  constructor(private loadService: LoadService,private service: BarberService, private clientservice: ClientService, private store: Store<{login: State}>,private ref: ChangeDetectorRef) { 7
  }

  ngOnInit(): void {
    this.loadBarberData(0);
    this.listenToLoading();
  }

  isClientNull(): boolean{
    return !this.barber.clients || this.barber.clients.length == 0;
  }
  modalAction(){
    if(this.update){
      this.updateClient();
    }else{
      this.saveClient();
    }
  }
  saveClient(){
    this.clientservice.saveClient(this.clientName)
    .subscribe(
      client =>{
        if(this.barber.clients == null){
          this.barber.clients = [];
        }
        this.barber.clients?.push(client);
      }
    );
    this.changeShowModal();
  }

  updateClient(){
    if(this.update){
      this.clientservice.updateClient(this.clientName,this.update.id).subscribe(x=>{
        for(let y = 0;y<this.barber.clients!.length;y++){
          if(this.barber.clients![y].id == x.id){
            this.barber.clients![y] = x;
          }
        }
      });
    }
    this.changeShowModal();
  }

  changeShowModal(update:number | null = 0){
    this.update = this.barber.clients?.find(x => x.id == update);
    if(this.update){
      this.buttonText = "Update";
      this.clientName = this.update.name;
      this.title = "Update";
    }else{
      this.clientName = '';
      this.title ="Create";
      this.buttonText = "Add";
    }
    this.showModal = !this.showModal;
  }

  loadBarberData(page: number){
    this.loading = true;
    this.service.getLoggedInUser().subscribe(logged =>{
      logged.password = "";
      this.barber = logged;
      this.controler('name').setValue(logged.name)
      this.controler('username').setValue(logged.username)
      this.controler('color').setValue(logged.color)
    });
    this.clientservice.getClients(page).subscribe(clients =>{
      this.barber.clients = clients.content;
      this.numberofPages = clients.totalPages;
    });
    this.loading = false;
  }


  onClickDelete(id:number | null){
    if(id != null){
      this.clientservice.deleteClient(id).subscribe(client=>{
        let fixtureclients = this.barber.clients?.filter(x => x.id != client.id);
        this.barber.clients = fixtureclients != undefined ? fixtureclients : [];
        if(this.barber.clients.length == 0 ){
          this.ref.markForCheck();
        }
      });
    }
  }

  onEventPage(page: number){
    this.loadBarberData(page);
    this.actualPage = page;
  }

  listenToLoading(){
    this.loadService.loading
    .pipe(delay(50))
    .subscribe((loading) =>{
      console.log(loading);
      this.loading = loading;
    })
  }

  controler(name: string){
    return this.barberForm.get(name) as FormControl
  }

  onUpdateBarber(){
    this.service.updateBarber(this.barberForm.value, this.barber.id!).subscribe(value=>{
      console.log(value);
    });
  }
}
