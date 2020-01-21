import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  login(username: string, password: string):any {
    if (username == "admin" && password == "1") {
      localStorage.setItem('token', "tokenString");
      return true;
    }
  }
  logout() {
    localStorage.removeItem('token');
  }  
  public get loggedIn(): boolean {  
    return (localStorage.getItem('token') !== null);  
  } 
}