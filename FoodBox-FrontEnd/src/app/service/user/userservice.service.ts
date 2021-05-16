import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ControlContainer, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from 'src/app/interface/order/order';
import { User } from 'src/app/interface/user/user';
import { SessionService } from '../session/session.service';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  
  rootUrl:String='http://localhost:3500/users/'
  constructor(private http:HttpClient,private session:SessionService) { }

  checkCredentials(username:string,password:string):Observable<User>{
    return this.http.get<User>(`${this.rootUrl}${username}/${password}`)
  }
  getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.rootUrl}`)
  }
  getUser(control:AbstractControl):Observable<User>{
    return this.http.get<User>(`${this.rootUrl}${control.value}`)
  }

  userExist():AsyncValidatorFn{
    return (control:AbstractControl):Observable<ValidationErrors | null>=>{
      return this.getUser(control).pipe(
        map(user=>{
          return user? { usernameExists: true } : null;
        })
      );
    }
  }

  getOrders(username:string):Observable<Order[]>{
    return  this.http.get<Order[]>(`${this.rootUrl}${username}/product`);
  }

  addUser(user:User):Observable<User>{
    return this.http.post<User>(`${this.rootUrl}`,user)
  }
}
