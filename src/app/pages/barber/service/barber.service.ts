import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import Barber from 'src/app/shared/models/barber.model';
import { State } from 'src/app/shared/states/reducer/auth.reducer';
import ServiceUtils from 'src/app/shared/util/service.utils';

@Injectable({
  providedIn: 'root'
})
export class BarberService {

  options = {
    headers: {
    }
  }

  getLoggedInUser(){
    return this.http.get<Barber>(ServiceUtils.getBaseUrl() + "/barber/self",this.options);
  }

  updateBarber(user: any, id: number){
    return this.http.put<Barber>(ServiceUtils.getBaseUrl() + '/barber/'+id,user,this.options);
  }
  constructor(private http: HttpClient, private store: Store<{login: State}>) { 
    this.store.subscribe(x=>{
      this.options.headers = {
        'Authorization':x.login.token
      };
    });
  }
}
