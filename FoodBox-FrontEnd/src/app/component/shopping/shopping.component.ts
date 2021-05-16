import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/service/session/session.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  nav:boolean=true;
  cartSize:number=0;
  constructor(private session:SessionService,private router:Router) { }

  ngOnInit(): void {
    this.session.sessionCart.subscribe(
      carts=>this.cartSize=carts.length
    );
  }
  change(){
    console.log("button click");
    this.nav=!this.nav;
  }
  logout(){
    this.session.addSession({username:'',password:''});
    this.session.deleteCart();
    this.router.navigate(['/Landing']);
  }
}
