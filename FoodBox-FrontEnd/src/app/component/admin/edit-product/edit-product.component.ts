import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interface/product/product';
import { ProductserviceService } from 'src/app/service/product/productservice.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  id:number;
  image:any;
  product:Product;
  constructor(private active:ActivatedRoute,private route:Router,private service:ProductserviceService) { }
  productForm:FormGroup=new FormGroup({
    name:new FormControl('',Validators.required),
    category:new FormControl('',Validators.required),
    amount:new FormControl('',[Validators.required,Validators.min(1)])
  });
  ngOnInit(): void {
    this.active.params.subscribe(
      params=>this.id=params['id']
    );
    this.service.getProduct(this.id).subscribe(
     product=>this.product=product,
     err=>alert("Fetch Error"),
     ()=>{
       this.productForm.setValue({
        name:this.product.name,
        category:this.product.category,
        amount:this.product.amount
       });
       this.image='data:image/jpeg;base64,' + this.product.img; 
     }
    );
  }
  submit(){
    this.product.name=this.productForm.get('name').value;
    this.product.amount=this.productForm.get('amount').value;
    this.product.category=this.productForm.get('category').value;
    this.service.updateProduct(this.product).subscribe(
      ()=>{
        alert("Product Updated Successfully");
        this.productForm.reset();
      }
    )
  }

  back(){
    this.route.navigate(['/Admin','ViewProduct'])
  }

}
