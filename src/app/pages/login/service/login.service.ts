import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

import Barber from 'src/app/shared/models/barber.model';
import ServiceUtils from 'src/app/shared/util/service.utils';

export interface LoginDTO{
  username:string,
  password:string
}

interface UsernameAvailabe{
  available: boolean;
}

export interface ResponseLoginDTO{
  Authorization:string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  headers={
    'Content-Type':'application/json'
  };

  constructor(private http:HttpClient) { }

  signup(barber: Barber){
    return this.http.post<Barber>(ServiceUtils.getBaseUrl()+"/barber",JSON.stringify(barber),{headers:this.headers});
  }

  login(login: LoginDTO){
    return this.http.post<ResponseLoginDTO>(ServiceUtils.getBaseUrl()+'/login',login);
  }

  isUsernameAvailable(username: string){
    return this.http.post<UsernameAvailabe>(`${ServiceUtils.getBaseUrl()}/barber/username/available`,{username}).toPromise();
  }
}
