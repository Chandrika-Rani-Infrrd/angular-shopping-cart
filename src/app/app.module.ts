import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../shared/header/header.component';
import { ProductsComponent } from './products/products.component';
import { MyCartComponent } from './mycart/my-cart.component';
import { ProductListComponent } from './productlist/product-list.component';
import { OverAllTotalPipe } from './mycart/over-all-total.pipe';
import { MyCartService } from './mycart/my-cart.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    MyCartComponent,
    ProductListComponent,
    OverAllTotalPipe
   ],
  imports: [BrowserModule, AppRoutingModule, RouterModule, HttpClientModule,FormsModule],
  providers: [ MyCartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
