import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  canActivate() {
    //authentication api or a custom function
    let user = {
      username: 'mahesh',
      password: 123456,
    };
    if (user.username == 'mahesh123' && user.password == 123456) {
      return true;
    } else {
      return false;
    }
  }
}
