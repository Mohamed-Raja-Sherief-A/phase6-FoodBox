import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddProductComponent } from "./add-product/add-product.component";
import { AdminComponent } from "./admin.component";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { HomeComponent } from "./home/home.component";
import { OfferManagementComponent } from "./offer-management/offer-management.component";
import { PasswordManagementComponent } from "./password-management/password-management.component";
import { UserManagementComponent } from "./user-management/user-management.component";
import { ViewProductComponent } from "./view-product/view-product.component";

const routes:Routes=[{path:'',component:AdminComponent,children:[
    {path:'',redirectTo:'/Admin/Home',pathMatch:'full'},
    {path:'Home',component:HomeComponent},
    {path:'AddProduct',component:AddProductComponent},
    {path:'ViewProduct',component:ViewProductComponent},
    {path:'Edit/:id',component:EditProductComponent},
    {path:'Users',component:UserManagementComponent},
    {path:'ChangePassword',component:PasswordManagementComponent},
    {path:'Offer',component:OfferManagementComponent},
    {path:'**',redirectTo:'/Admin/Home',pathMatch:'full'}
]}];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class AdminRoutingModule{}