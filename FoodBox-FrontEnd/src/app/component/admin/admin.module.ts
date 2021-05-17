import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "src/app/app-routing.module";
import { AddProductComponent } from "./add-product/add-product.component";
import { AdminNavComponent } from "./admin-nav/admin-nav.component";


import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { HomeComponent } from "./home/home.component";
import { MaterialModuleModule } from "./material-module.module";
import { AddOfferComponent } from "./offer-management/add-offer/add-offer.component";
import { OfferManagementComponent } from "./offer-management/offer-management.component";
import { ViewOfferComponent } from "./offer-management/view-offer/view-offer.component";
import { PasswordManagementComponent } from "./password-management/password-management.component";
import { UserManagementComponent } from "./user-management/user-management.component";
import { ProductComponent } from "./view-product/product/product.component";
import { ViewProductComponent } from "./view-product/view-product.component";

@NgModule({
    declarations:[
        AdminNavComponent,
        AdminComponent,
    AddProductComponent,
EditProductComponent,
HomeComponent,
OfferManagementComponent,
PasswordManagementComponent,
UserManagementComponent,
ViewProductComponent,
AddOfferComponent,
ViewOfferComponent,
  ProductComponent
                   ],
    imports:[
        CommonModule,
        AdminRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        MaterialModuleModule,
        MatNativeDateModule],

})
export class AdminModule{}