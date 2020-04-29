import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { MycartComponent } from './mycart/mycart.component';
import { ProductlistComponent } from './productlist/productlist.component';


export const routes: Routes = [
  {path:'products',component:ProductsComponent},
  {path:'mycart',component:MycartComponent},
  {path:'products/:id',component:ProductlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
