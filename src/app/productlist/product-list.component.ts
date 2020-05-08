import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products:any=[];

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(item=>{
      this.products=item;
    })
  }

}
