import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";
import { MaterialModuleModule } from "../admin/material-module.module";
import { CustomCarousalComponent } from "./custom-carousal/custom-carousal.component";
import { LandingHeaderComponent } from "./landing-header/landing-header.component";
import { LandingMainComponent } from "./landing-main/landing-main.component";
import { LandingRoutingModule } from "./landing-routing.module";
import { LandingComponent } from "./landing.component";
import { LoginRegistrationComponent } from "./login-registration/login-registration.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

@NgModule({
    declarations:[
        LandingComponent,
        CustomCarousalComponent,
        LandingHeaderComponent,
        LandingMainComponent,
        LoginComponent,
        LoginRegistrationComponent,
        SignupComponent
    ],
    imports:[
        LandingRoutingModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        MaterialModuleModule,
        MatNativeDateModule
    ]
})
export class LandingModule{}