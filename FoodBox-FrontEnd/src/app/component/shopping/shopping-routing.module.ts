import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OrderSummaryComponent } from "./order-summary/order-summary.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { ShoppingMainComponent } from "./shopping-main/shopping-main.component";
import { ShoppingComponent } from "./shopping.component";

const routes:Routes=[
    {path:'',component:ShoppingComponent,children:[
        {path:'',redirectTo:'/Shopping/Home',pathMatch:'full'},
        {path:'Home',component:ShoppingMainComponent},
        {path:'CheckOut',component:ShoppingCartComponent},
        {path:'OrderSummary/:offer',component:OrderSummaryComponent},
        {path:'**',redirectTo:'/Landing'}
    ]}
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ShoppingRoutingModule{}