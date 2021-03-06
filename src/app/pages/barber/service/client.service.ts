import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import Client from 'src/app/shared/models/client.model';
import { State } from 'src/app/shared/states/reducer/auth.reducer';
import { Page } from 'src/app/shared/util/generic/page.model';
import ServiceUtils from 'src/app/shared/util/service.utils';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient, private store: Store<{login: State}>) { 
    this.store.subscribe(x=> this.options = {
      headers:{
        'Content-Type': 'application/json',
        'Authorization': x.login.token
      }
    });
  }
  options = {}
  saveClient(client: string){
    return this.http.post<Client>(`${ServiceUtils.getBaseUrl()}/client`,{name:client,amount:0.0},this.options);
  }

  getClients(page: number){
    return this.http.get<Page<Client>>(ServiceUtils.getBaseUrl() + "/clients/"+page,this.options);
  }

  deleteClient(id:number){
    return this.http.delete<Client>(ServiceUtils.getBaseUrl() + "/client/"+id,this.options)
  }

  updateClient(name: string,id:number| null){
    return this.http.put<Client>(ServiceUtils.getBaseUrl() + "/client/"+id,{name:name},this.options);
  }
}
