import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'',redirectTo:'/Landing',pathMatch:'full'},
  {path:'Landing', loadChildren: () => import('./component/landing/landing.module').then(m => m.LandingModule)},
  {path:'Admin',loadChildren: () => import('./component/admin/admin.module').then(m => m.AdminModule)},
  {path:'Shopping',loadChildren: () => import('./component/shopping/shopping.module').then(m => m.ShoppingModule)},
  {path:'**',redirectTo:'/Landing',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
