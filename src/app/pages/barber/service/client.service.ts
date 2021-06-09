import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Client from 'src/app/shared/models/client.model';
import ServiceUtils from 'src/app/shared/util/service.utils';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  saveClient(client: string){
    this.http.post<Client>(`${ServiceUtils.getBaseUrl()}/client`,{client},{headers:{'Content-Type': 'application/json'}});
  }
}
