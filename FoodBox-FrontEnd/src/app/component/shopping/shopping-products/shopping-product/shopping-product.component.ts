import { AotSummaryResolver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product/product';
import { SessionService } from 'src/app/service/session/session.service';
import AOS from 'aos';
@Component({
  selector: 'app-shopping-product',
  templateUrl: './shopping-product.component.html',
  styleUrls: ['./shopping-product.component.css']
})
export class ShoppingProductComponent implements OnInit {
  @Input() product:Product;
  counter:number=0;
  image:any;
  constructor(private service:SessionService) { }

  ngOnInit(): void {
    this.image='data:image/jpeg;base64,'+this.product.img;
    AOS.init();
  }
  cart(){
    
    this.service.addCart(this.product,this.counter);
    
  }
  add(){
    this.counter++;
  }
  minus(){
    this.counter--;
  }
}

