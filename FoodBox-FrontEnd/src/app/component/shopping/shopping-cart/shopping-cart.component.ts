import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/interface/cart/cart';
import { Offer } from 'src/app/interface/offer/offer';
import { Product } from 'src/app/interface/product/product';
import { User } from 'src/app/interface/user/user';
import { OfferserviceService } from 'src/app/service/offer/offerservice.service';
import { OrderserviceService } from 'src/app/service/order/orderservice.service';
import { SessionService } from 'src/app/service/session/session.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  carts:Cart[]=[];
  code:string="";
  offer:Offer={oid:+0,code:'',offer:+0};
  redeemed:boolean=false;
  user:User=null;
  checkout:boolean=false;
  amount:number=0;
  constructor(private session:SessionService,private service:OfferserviceService,private service1:OrderserviceService,private route:Router) { }

  ngOnInit(): void {
    this.session.sessionCart.subscribe(
      carts=>{this.carts=carts;
        if(carts.length>0) this.checkout=true;
        this.amount=0;
        carts.forEach(cart=>this.amount+=cart.product.amount*cart.counter);
        
      }
    );
    this.session.sessionUser.subscribe(
      user=>this.user=user
    );
  }
  delete(i:number){
    this.session.deleteItem(i);
    if(this.carts.length===0) this.checkout=false;
  }
  redeem(){
    this.service.getOffer(this.code).subscribe(
      offer=>this.offer=offer,
      err=>alert('Invalid offer / error'),
      ()=>{
        if(this.offer){
          
        alert('Offer Valid');
        this.redeemed=true;
      }
        else {alert('Offer InValid');}
      }
     
    );
  }
  checkOut(){
    this.carts.forEach(cart=>{
      for(let i=0;i<cart.counter;i++){ 
      this.service1.addOrder({oid:+0,user:this.user,product:cart.product}).subscribe(
      order=>console.log(order),
      ()=>console.log("added")
    );
   }
  }
    );
    this.route.navigate(['/Shopping','OrderSummary',this.offer.offer]);
  }
}
