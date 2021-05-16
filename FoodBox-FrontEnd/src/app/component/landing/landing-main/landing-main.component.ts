import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-main',
  templateUrl: './landing-main.component.html',
  styleUrls: ['./landing-main.component.css']
})
export class LandingMainComponent implements OnInit {
  login:boolean=false;
  signup:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  logincheck(value:boolean){
    this.login=value;
    console.log("login check");
  }
  signupcheck(value:boolean){
    this.signup=value;
    console.log("signup check");
  }
}
