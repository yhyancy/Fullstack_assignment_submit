import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  canActivate() {
    if (!sessionStorage.getItem('token')) {
      console.log(sessionStorage.getItem('token'))
      alert('Please Sign in')
      return false;
    } else {
      return true;
    }

  }


}
