import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, distinctUntilChanged, exhaustMap, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { LoginService, ResponseLoginDTO } from 'src/app/pages/login/service/login.service';
import { AuthActionType, login, loginFailed, loginSucess } from '../action/auth.actions';

@Injectable()
export class LoginEffect{

    private storage: Storage;

    login$ = createEffect(()=> this.actions$.pipe(
        ofType(AuthActionType.LOGIN),
        exhaustMap(({username, password})=> this.loginService.login({username, password})
            .pipe(
                map((Authorization: ResponseLoginDTO) =>loginSucess(Authorization)),
                catchError(()=> of(loginFailed()))
            )
        ),
    ));


    sucess$ = createEffect(()=>this.actions$.pipe(
        ofType(AuthActionType.SUCCESS),
        map(({Authorization})=> this.storage.setItem('token',Authorization))
    ),{dispatch: false});

    


    constructor(
        private actions$: Actions,
        private loginService: LoginService,
        private router: Router
    ){
        this.storage = window.localStorage;
    }
}