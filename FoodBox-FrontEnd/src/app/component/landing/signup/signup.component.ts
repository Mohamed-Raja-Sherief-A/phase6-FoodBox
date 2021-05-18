import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interface/user/user';
import { UserserviceService } from 'src/app/service/user/userservice.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  success:boolean=false;
  @Output() closeEmitter:EventEmitter<boolean>=new EventEmitter<boolean>();
  constructor(private service:UserserviceService) { }
  signupForm:FormGroup=new FormGroup({
    username:new FormControl('',[Validators.required] ,this.service.userExist()),
    password:new FormControl('',[Validators.required]),
    repassword:new FormControl('',[Validators.required])
  });
 

  ngOnInit(): void {
  }
  close(){
    this.closeEmitter.emit(false);
  }
  submit(){
    this.success=true;
    let user:User={username:this.signupForm.get('username').value,password:this.signupForm.get('password').value};
    this.service.addUser(user).subscribe(
      ()=>{
        this.success=false;
        alert('User Added Successfull');
        this.signupForm.reset();
      }
    );
  }
}
