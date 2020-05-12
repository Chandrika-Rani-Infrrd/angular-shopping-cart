import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit,OnDestroy{
  name:string;
  productsList:any=[];
  cartValues=[];
  totalAmount=0;
  sum=0;
  storeDeletedItem: any[];
  checkDeletedItem: any;
  deletedItemPresent: boolean;

  constructor(private router:Router,
              private route:ActivatedRoute,
              private productService:ProductsService){}

  ngOnInit(): void {
    if(localStorage.getItem('deleteditem').length>0){
      this.checkDeletedItem=JSON.parse(localStorage.getItem('deleteditem'));
    }
    this.name=this.route.snapshot.paramMap.get('name');
    this.productService.getProducts().subscribe(item=>{
      this.productsList=item;
      this.cartValues=JSON.parse(localStorage.getItem('cartValue')) || [];
      let itemPresent=this.cartValues.map((item)=>{
        if(item.name==this.name){
          return item.name;
        }
      });
      this.productsList.map(product=>{
        if(this.checkDeletedItem){
          this.deletedItemPresent=this.checkDeletedItem.filter(ele=>ele.id==product.id)
        }
        if(product.name===this.name && !itemPresent.includes(this.name) && !this.deletedItemPresent){
            this.cartValues.push(product);
            localStorage.setItem('cartValue',JSON.stringify(this.cartValues));
            let cart=JSON.parse(localStorage.getItem('cartValue'));
        }
      })   
    })
  }

  productToDelete(value):void{
    this.storeDeletedItem=this.cartValues.filter((item)=>item.id==value);
    localStorage.setItem('deleteditem',JSON.stringify(this.storeDeletedItem));
    let deleteditem=this.cartValues.filter((item)=>item.id!==value);
    this.cartValues=deleteditem;
    localStorage.setItem('cartValue',JSON.stringify(this.cartValues));
  }

  increment(item):number{
    item.quantity+=1;
    localStorage.setItem('cartValue',JSON.stringify(this.cartValues));
    return item.quantity;
  }

  decrement(item):number{
    if(item.quantity<=1)
      item.quantity=1;
    else
      item.quantity-=1; 
    localStorage.setItem('cartValue',JSON.stringify(this.cartValues));
    return item.quantity;
  }

  onClick(){
    this.router.navigate(['/product-list']);
  }

  ngOnDestroy(){
    localStorage.setItem('deleteditem','');
  }
}
