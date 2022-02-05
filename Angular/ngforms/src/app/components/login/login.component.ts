import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  login(loginForm: NgForm) {
    console.log(loginForm.value);
    let loginCredentials = loginForm.value;
    //login api call or call login servie
    //http.post(loginapi, loginCredentials)
  }

  reset(loginForm: NgForm) {
    loginForm.reset();
  }

  setValues(loginForm: NgForm) {
    let loginData = {
      email: 'demo@gmail.com',
      password: '123456789'
    }
    loginForm.setValue(loginData)
  }
}
