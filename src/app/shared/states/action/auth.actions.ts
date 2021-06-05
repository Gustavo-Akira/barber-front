import { createAction, props } from '@ngrx/store';
import { ResponseLoginDTO } from 'src/app/pages/login/service/login.service';

export enum AuthActionType{
    LOGIN = '[Login] Login Attempt',
    SUCCESS = '[Login] Login Success',
    FAIL = '[Login] Login Failed'
}


export const login = createAction(
    AuthActionType.LOGIN,
    props<{username: string, password: string}>()
);

export const loginSucess = createAction(
    AuthActionType.SUCCESS,
    props<ResponseLoginDTO>()
);

export const loginFailed = createAction(
    AuthActionType.FAIL,
)