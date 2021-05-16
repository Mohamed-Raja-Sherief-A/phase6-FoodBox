import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.css']
})
export class LoginRegistrationComponent implements OnInit {
  @Output()loginclick:EventEmitter<Boolean>=new EventEmitter<Boolean>();
  @Output()signupclick:EventEmitter<Boolean>=new EventEmitter<Boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  loginClick(){
    this.loginclick.emit(true);
  }
  signupClick(){
    this.signupclick.emit(true);
  }
}
