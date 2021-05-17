import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";
import { RouterModule } from "@angular/router";
import { CustomPipePipe } from "src/app/pipes/custom-pipe.pipe";
import { MaterialModuleModule } from "../admin/material-module.module";
import { NavShoppingComponent } from "./nav-shopping/nav-shopping.component";
import { OrderSummaryComponent } from "./order-summary/order-summary.component";
import { ShoppingCarouselComponent } from "./shopping-carousel/shopping-carousel.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { ShoppingMainComponent } from "./shopping-main/shopping-main.component";
import { ShoppingProductComponent } from "./shopping-products/shopping-product/shopping-product.component";
import { ShoppingProductsComponent } from "./shopping-products/shopping-products.component";
import{ShoppingRoutingModule} from "./shopping-routing.module";
import { ShoppingComponent } from "./shopping.component";

@NgModule({
    declarations:[
        NavShoppingComponent,
        OrderSummaryComponent,
        ShoppingCarouselComponent,
        ShoppingCartComponent,
        ShoppingMainComponent,
        ShoppingProductsComponent,
        ShoppingProductComponent,
        CustomPipePipe,
        ShoppingComponent
    ],
    imports:[
        ShoppingRoutingModule,
        MaterialModuleModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        MatNativeDateModule,
        
],

})
export class ShoppingModule{}