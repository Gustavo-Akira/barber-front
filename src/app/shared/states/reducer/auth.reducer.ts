import {createReducer, on, Action} from '@ngrx/store';
import { login, loginFailed, loginSucess } from '../action/auth.actions';


interface State {
    token: string;
    username: string;
    password: string;
}

export const initialState: State = {
    token: '', 
    username: '',
    password: ''
}

const _authReducer = createReducer(
    initialState,
    on(login, (state,{username,password}) =>({...state, username, password})),
    on(loginSucess,(state, {Authorization})=>{
        console.log(Authorization);
        return ({...state, token:Authorization.toString().split(" ")[1]});
    }),
    on(loginFailed,() => initialState)
);

export function reducer(state: State | undefined, action: Action){
    return _authReducer(state,action);
}