import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interface/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
 rootUrl:string='http://localhost:3500/products/'
  constructor(private http:HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.rootUrl}`)
  }
  addProducts(product:Product,file:File){
    const uploadData = new FormData();
    uploadData.append('img',file,file.name);
    uploadData.append('product',JSON.stringify(product));
   // this.data={product:product,file:uploadData};
     return this.http.post<Product>(this.rootUrl,uploadData);
    }
    updateProduct(product:Product):Observable<Product>{
      return this.http.put<Product>(this.rootUrl,product);
    }
    getProduct(id:number):Observable<Product>{
     
      return this.http.get<Product>(`${this.rootUrl}${id}`);
    }
}
