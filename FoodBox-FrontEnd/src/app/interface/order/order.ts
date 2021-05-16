import { Product } from "../product/product";
import { User } from "../user/user";

export interface Order {
    oid:number;
    user:User;
    product:Product;
}
