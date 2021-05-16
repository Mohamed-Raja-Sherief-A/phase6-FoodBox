import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/service/session/session.service';

@Component({
  selector: 'app-nav-shopping',
  templateUrl: './nav-shopping.component.html',
  styleUrls: ['./nav-shopping.component.css']
})
export class NavShoppingComponent implements OnInit {
  cartSize:number=0;
  
  constructor(private session:SessionService,private router:Router) { }

  ngOnInit(): void {
    this.session.sessionCart.subscribe(
      carts=>this.cartSize=carts.length
    );
  }
  logout(){
    this.session.addSession({username:'',password:''});
    this.session.deleteCart();
    this.router.navigate(['/Landing']);
  }
}
