import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any[]=[
    {name:'Nike Shoes',price:8000},
    {name:'college Bag',price:450},
    {name:'Phone Case',price:750},
    {name:'Bluetooth Hearphones',price:2000},
    {name:'sports Bottle',price:800},
    {name:'Phone Charger',price:500},
    {name:'T-Shirt',price:1000},
    {name:'Dress Material',price:2500},
    {name:'Hair straightner',price:1500},
    {name:'Facewash',price:300}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log("add button clicked");
  }

}
