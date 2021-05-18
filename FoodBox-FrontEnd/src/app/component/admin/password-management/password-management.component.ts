import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interface/user/user';
import { SessionService } from 'src/app/service/session/session.service';
import { UserserviceService } from 'src/app/service/user/userservice.service';

@Component({
  selector: 'app-password-management',
  templateUrl: './password-management.component.html',
  styleUrls: ['./password-management.component.css']
})
export class PasswordManagementComponent implements OnInit {
  success:boolean=false;
  user:User=null;
  passwordForm:FormGroup=new FormGroup({
    oldpassword:new FormControl('',[Validators.required]),
    newpassword:new FormControl('',Validators.required),
    repassword:new FormControl('',Validators.required)
  });
  constructor(private service:SessionService,private userService:UserserviceService) { }

  ngOnInit(): void {
    this.service.sessionUser.subscribe(
      user=>this.user=user
    );
  }
  submit(){
    this.success=true;
    if(this.user.password===this.passwordForm.get('oldpassword').value && this.passwordForm.get('newpassword').value===this.passwordForm.get('repassword').value){
      this.userService.addUser({username:this.user.username,password:this.passwordForm.get('repassword').value}).subscribe(
        ()=>{this.success=false;alert("Password updated");this.passwordForm.reset();}
      )
    }
    else{
      this.success=false;
      alert("Invalid Old Password / New Password Doesn't Match")
    }
  }
}
