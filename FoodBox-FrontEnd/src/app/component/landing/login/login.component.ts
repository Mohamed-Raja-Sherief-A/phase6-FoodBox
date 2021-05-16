import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user/user';
import { SessionService } from 'src/app/service/session/session.service';
import { UserserviceService } from 'src/app/service/user/userservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() closeEmitter:EventEmitter<Boolean>=new EventEmitter<Boolean>();
  user:User;
  constructor(private service:UserserviceService,private session:SessionService,private route:Router) { }
  loginForm:FormGroup=new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  });
  

  ngOnInit(): void {
  }
  submit(){
    this.service.checkCredentials(this.loginForm.get('username').value,this.loginForm.get('password').value).subscribe(
      user=>{this.user=user;},
      err=>alert("Login Error"),
      ()=>{
        if(this.user){
          this.session.addSession(this.user);
        if(this.user.username==='Admin'){
          this.route.navigate(['/Admin'])
        }
        else{
          this.route.navigate(['/Shopping'])
        }
      }
      else{
        alert('Invalid username / password');
      }
      }
    );
  }
  close(){
    this.closeEmitter.emit(false);
  }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
}
