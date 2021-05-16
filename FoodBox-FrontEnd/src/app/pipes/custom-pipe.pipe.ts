import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interface/product/product';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: Product[], search?:string,category?:string): unknown {
    if(category!='All'){
      return value.filter(product=>product.name.includes(search) && product.category===category );
      }
      else if(category==='All'){
        return value.filter(product=>product.name.includes(search));
      }
      else return value;
    
  }

}
