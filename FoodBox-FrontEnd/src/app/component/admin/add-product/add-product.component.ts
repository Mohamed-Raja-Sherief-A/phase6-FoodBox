import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/interface/product/product';
import { ProductserviceService } from 'src/app/service/product/productservice.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  selectedFile:File;
  constructor(private service:ProductserviceService) { }
  productForm:FormGroup=new FormGroup({
    name:new FormControl('',Validators.required),
    category:new FormControl('',Validators.required),
    amount:new FormControl('',[Validators.required,Validators.min(1)]),
    file:new FormControl('',Validators.required)
  });
  ngOnInit(): void {
  }
  onFileChanged(event:any){
    this.selectedFile=event.target.files[0];
  }
  productSubmit(){
    let product:Product={
      pid:+0,
      name:this.productForm.get('name').value,
      category:this.productForm.get('category').value,
      amount:+this.productForm.get('amount').value,
      img:'',
      status:'Active'
    }
    this.service.addProducts(product,this.selectedFile).subscribe(
      ()=>{alert("Product Added Succesfully");this.productForm.reset();}
    );
  }
}
