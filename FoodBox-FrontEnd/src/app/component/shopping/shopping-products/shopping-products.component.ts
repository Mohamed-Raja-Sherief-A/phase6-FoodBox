import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product/product';
import { ProductserviceService } from 'src/app/service/product/productservice.service';
import { SessionService } from 'src/app/service/session/session.service';

@Component({
  selector: 'app-shopping-products',
  templateUrl: './shopping-products.component.html',
  styleUrls: ['./shopping-products.component.css']
})
export class ShoppingProductsComponent implements OnInit {
  products:Product[]=[];
  search:string="";
  category:string="All";
  constructor(private service:ProductserviceService,private session:SessionService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe(
      products=>this.products=products.filter(product=>product.status==='Active')
    );
   
  }
  
}
window.addEventListener('scroll', function() {
  console.log("Scrollin'");
});