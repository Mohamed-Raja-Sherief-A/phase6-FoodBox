import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/interface/cart/cart';
import { Product } from 'src/app/interface/product/product';
import { SessionService } from 'src/app/service/session/session.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  carts:Cart[]=[];
  offer:number=0;
  amount=0;
  constructor(private session:SessionService,private active:ActivatedRoute) { }

  ngOnInit(): void {
    this.session.sessionCart.subscribe(
      carts=>{this.carts=carts;
      this.amount=0;
      carts.forEach(cart=>this.amount+=cart.product.amount*cart.counter);  
      });
    this.active.params.subscribe(params=>this.offer=params['offer']);
    this.amount-=this.offer;
  }

}
