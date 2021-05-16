import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interface/product/product';
import { ProductserviceService } from 'src/app/service/product/productservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product:Product;
  image:any;
  constructor(private service:ProductserviceService,private route:Router,private active:ActivatedRoute) { }

  ngOnInit(): void {
    this.image='data:image/jpeg;base64,'+this.product.img;
  }
  enable(){
    if(confirm("Are you sure you want to update"))
    {
     this.product.status="Active";
     this.service.updateProduct(this.product).subscribe(
       ()=>alert(`${this.product.name} is updated to Active`)
     );
     }
   }
   disable(){
     if(confirm("Are you sure you want to update"))
    {
     this.product.status="InActive";
     this.service.updateProduct(this.product).subscribe(
       ()=>alert(`${this.product.name} is updated to InActive`)
     );
    }
   }
  edit(){
    this.route.navigate(['Edit',this.product.pid],{relativeTo:this.active.parent})
  }
}
