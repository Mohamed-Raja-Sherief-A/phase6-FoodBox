import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product/product';
import { ProductserviceService } from 'src/app/service/product/productservice.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  success:boolean=true;
  products:Product[]=[];
  constructor(private service:ProductserviceService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe(
      products=>this.products=products,
      err=>console.log(err),
      ()=>this.success=false
    );
  }

}
