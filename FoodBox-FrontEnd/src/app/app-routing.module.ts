import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './component/admin/add-product/add-product.component';
import { AdminComponent } from './component/admin/admin.component';
import { EditProductComponent } from './component/admin/edit-product/edit-product.component';
import { HomeComponent } from './component/admin/home/home.component';
import { OfferManagementComponent } from './component/admin/offer-management/offer-management.component';
import { PasswordManagementComponent } from './component/admin/password-management/password-management.component';
import { UserManagementComponent } from './component/admin/user-management/user-management.component';
import { ViewProductComponent } from './component/admin/view-product/view-product.component';
import { LandingComponent } from './component/landing/landing.component';
import { OrderSummaryComponent } from './component/shopping/order-summary/order-summary.component';
import { ShoppingCartComponent } from './component/shopping/shopping-cart/shopping-cart.component';
import { ShoppingMainComponent } from './component/shopping/shopping-main/shopping-main.component';
import { ShoppingProductsComponent } from './component/shopping/shopping-products/shopping-products.component';
import { ShoppingComponent } from './component/shopping/shopping.component';
import { OrderserviceService } from './service/order/orderservice.service';

const routes: Routes = [
  {path:'',redirectTo:'/Landing',pathMatch:'full'},
  {path:'Landing', component:LandingComponent},
  {path:'Admin',component:AdminComponent,children:[
    {path:'',redirectTo:'/Admin/Home',pathMatch:'full'},
    {path:'Home',component:HomeComponent},
    {path:'AddProduct',component:AddProductComponent},
    {path:'ViewProduct',component:ViewProductComponent},
    {path:'Edit/:id',component:EditProductComponent},
    {path:'Users',component:UserManagementComponent},
    {path:'ChangePassword',component:PasswordManagementComponent},
    {path:'Offer',component:OfferManagementComponent},
    {path:'**',redirectTo:'/Admin/Home',pathMatch:'full'}
    
  ]},
  {path:'Shopping',component:ShoppingComponent,children:[
    {path:'',redirectTo:'/Shopping/Home',pathMatch:'full'},
    {path:'Home',component:ShoppingMainComponent},
    {path:'CheckOut',component:ShoppingCartComponent},
    {path:'OrderSummary/:offer',component:OrderSummaryComponent},
    {path:'**',redirectTo:'/Landing'}
  ]},
  {path:'**',redirectTo:'/Landing',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
