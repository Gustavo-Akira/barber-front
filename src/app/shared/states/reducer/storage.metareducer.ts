import { Action, ActionReducer, State } from "@ngrx/store";
import {merge, pick} from 'lodash-es';

import {State as LoginState} from '../reducer/auth.reducer';

function setSavedState(state: any, localStorageKey: string): void{
    localStorage.setItem(localStorageKey, state.login.token);
}

function getSavedState(localStorageKey: string){
    let x= localStorage.getItem(localStorageKey); 
    if(x != null){       
        return  x;
    }
    return null;
}

const stateKeys = ['token'];

const localStorageKey = 'token';

export function storageMetaReducer(reducer: any): ActionReducer<any>{
    let OnInit = true;
    return function(state, action){
        const nextState = reducer(state, action);
        if (OnInit) {
            OnInit= false;
            const savedState = {login:{token : getSavedState(localStorageKey)}};            
            return merge(nextState, savedState);
        }
        const stateToSave = pick(nextState, 'login');
        setSavedState(stateToSave, localStorageKey);
        return nextState;
    }
}

