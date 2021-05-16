import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from 'src/app/interface/cart/cart';
import { Product } from 'src/app/interface/product/product';
import { User } from 'src/app/interface/user/user';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  user:User=null;
  sessionUser:BehaviorSubject<User>=new BehaviorSubject<User>(this.user);
  cart:Cart[]=[];
  sessionCart:BehaviorSubject<Cart[]>=new BehaviorSubject<Cart[]>(this.cart);
  amount:number=0;
  cartAmmount:BehaviorSubject<number>=new BehaviorSubject<number>(this.amount);
  constructor() { }
  addSession(user:User){
    this.sessionUser.next(user);
  }
  addCart(product:Product,counter:number){
    this.cart.push({product:product,counter:+counter});
    this.sessionCart.next(this.cart);
  }
  deleteItem(i:number){
    this.cart.splice(i,1);
    this.sessionCart.next(this.cart);
  }
  deleteCart(){
   this.cart=[];
   this.sessionCart.next(this.cart);
  }
}
