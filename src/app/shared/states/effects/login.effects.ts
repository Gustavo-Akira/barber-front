import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';
import { LoginService, ResponseLoginDTO } from 'src/app/pages/login/service/login.service';
import { AuthActionType, login, loginSucess } from '../action/auth.actions';

@Injectable()
export class LoginEffect{

    login$ = createEffect(()=> this.actions$.pipe(
        ofType(AuthActionType.LOGIN),
        exhaustMap(({username, password})=> this.loginService.login({username, password})
            .pipe(
                map((Authorization: ResponseLoginDTO) =>loginSucess(Authorization))
            )
        )
    ))

    


    constructor(
        private actions$: Actions,
        private loginService: LoginService
    ){
    }
}