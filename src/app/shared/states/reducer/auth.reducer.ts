import {createReducer, on, Action} from '@ngrx/store';
import { login, loginFailed, loginRefresh, loginSucess } from '../action/auth.actions';


export interface State {
    token: string;
    username: string;
    password: string;
    error: boolean;
}

export const initialState: State = {
    token: '', 
    username: '',
    password: '',
    error: false
}

const _authReducer = createReducer(
    initialState,
    on(login, (state,{username,password}) =>({...state, username, password})),
    on(loginSucess,(state, {Authorization})=> ({...state, token:Authorization.toString().split(" ")[1]})),
    on(loginFailed,(state) => ({...state, error:true})),
    on(loginRefresh, (state)=>initialState)
);

export function reducer(state: State | undefined, action: Action){
    return _authReducer(state,action);
}