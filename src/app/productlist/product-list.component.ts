import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products:any=[];

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("../../assets/products.json").subscribe(item=>{
      console.log(item);
      this.products=item;
    })
  }

  onClick(){
    console.log("add button clicked");
  }

}
