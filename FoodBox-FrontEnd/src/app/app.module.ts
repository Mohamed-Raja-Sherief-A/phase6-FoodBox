import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './component/landing/landing.component';
import { LandingHeaderComponent } from './component/landing/landing-header/landing-header.component';
import { LandingMainComponent } from './component/landing/landing-main/landing-main.component';
import { LoginRegistrationComponent } from './component/landing/login-registration/login-registration.component';
import { CustomCarousalComponent } from './component/landing/custom-carousal/custom-carousal.component';
import { LoginComponent } from './component/landing/login/login.component';
import { SignupComponent } from './component/landing/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './component/admin/admin.component';
import { HomeComponent } from './component/admin/home/home.component';
import { AdminNavComponent } from './component/admin/admin-nav/admin-nav.component';
import { AddProductComponent } from './component/admin/add-product/add-product.component';
import { ViewProductComponent } from './component/admin/view-product/view-product.component';
import { EditProductComponent } from './component/admin/edit-product/edit-product.component';
import { UserManagementComponent } from './component/admin/user-management/user-management.component';
import { PasswordManagementComponent } from './component/admin/password-management/password-management.component';
import { OfferManagementComponent } from './component/admin/offer-management/offer-management.component';
import { ProductComponent } from './component/admin/view-product/product/product.component';
import { AddOfferComponent } from './component/admin/offer-management/add-offer/add-offer.component';
import { ViewOfferComponent } from './component/admin/offer-management/view-offer/view-offer.component';
import { ShoppingComponent } from './component/shopping/shopping.component';
import { NavShoppingComponent } from './component/shopping/nav-shopping/nav-shopping.component';
import { ShoppingProductsComponent } from './component/shopping/shopping-products/shopping-products.component';
import { ShoppingMainComponent } from './component/shopping/shopping-main/shopping-main.component';
import { ShoppingCarouselComponent } from './component/shopping/shopping-carousel/shopping-carousel.component';
import { ShoppingProductComponent } from './component/shopping/shopping-products/shopping-product/shopping-product.component';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';
import { ShoppingCartComponent } from './component/shopping/shopping-cart/shopping-cart.component';
import { OrderSummaryComponent } from './component/shopping/order-summary/order-summary.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './material-module/material-module.module';
import {MatNativeDateModule} from '@angular/material/core';
import { AdminNavMaterialComponent } from './component/admin/admin-nav-material/admin-nav-material.component';
import { NavAnimComponent } from './component/shopping/nav-anim/nav-anim.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LandingHeaderComponent,
    LandingMainComponent,
    LoginRegistrationComponent,
    CustomCarousalComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    HomeComponent,
    AdminNavComponent,
    AddProductComponent,
    ViewProductComponent,
    EditProductComponent,
    UserManagementComponent,
    PasswordManagementComponent,
    OfferManagementComponent,
    ProductComponent,
    AddOfferComponent,
    ViewOfferComponent,
    ShoppingComponent,
    NavShoppingComponent,
    ShoppingProductsComponent,
    ShoppingMainComponent,
    ShoppingCarouselComponent,
    ShoppingProductComponent,
    CustomPipePipe,
    ShoppingCartComponent,
    OrderSummaryComponent,
    AdminNavMaterialComponent,
    NavAnimComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
