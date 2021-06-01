import { AbstractControl, AsyncValidatorFn,ValidationErrors } from '@angular/forms';
import { Observable, of, timer } from 'rxjs';
import {switchMap } from 'rxjs/operators';

import { LoginService } from '../service/login.service';

export default function unique(loginService:LoginService):AsyncValidatorFn{
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    let debounceTime = 500;
    const debounceTimer = timer(debounceTime);
    return debounceTimer.pipe(
      switchMap(()=>{
        return loginService.isUsernameAvailable(control.value)
        .then(result=>{
          console.log(result.available);
         return !result.available ? {"nonUniqueUsername": true} : null
        }
        );
      })
    );
  }
}