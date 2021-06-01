import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

import Barber from 'src/app/shared/models/barber.model';
import ServiceUtils from 'src/app/shared/util/service.utils';

export interface LoginDTO{
  username:string,
  password:string
}

interface UsernameAvailabe{
  available: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  signup(barber: Barber){
    return this.http.post<Barber>(ServiceUtils.getBaseUrl()+"/barber",barber);
  }

  login(login: LoginDTO){
    return this.http.post<string>(ServiceUtils.getBaseUrl()+'/login',login);
  }

  isUsernameAvailable(username: string){
    return this.http.post<UsernameAvailabe>(`${ServiceUtils.getBaseUrl()}/barber/username/available`,{username}).toPromise();
  }
}
