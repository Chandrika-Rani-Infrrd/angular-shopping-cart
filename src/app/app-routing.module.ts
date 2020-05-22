import { LoginFormComponent } from './login-form/login-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyCartComponent } from './mycart/my-cart.component';
import { ProductListComponent } from './productlist/product-list.component';

export const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:"full"},
  { path: 'login', component:LoginFormComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'mycart', component: MyCartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
