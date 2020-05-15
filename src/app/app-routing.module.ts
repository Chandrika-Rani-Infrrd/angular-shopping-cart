import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyCartComponent } from './mycart/my-cart.component';
import { ProductListComponent } from './productlist/product-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'product-list', pathMatch: 'full' },
  { path: 'product-list', component: ProductListComponent },
  { path: 'mycart', component: MyCartComponent },
  { path: 'mycart/:name', component: MyCartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
