import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  name:string;
  productsList:any=[];
  myCart:any=[];
  cartValues=[];
  totalAmount:number=0;

  constructor(private router:Router,
              private route:ActivatedRoute,
              private productsService:ProductsService)
              { }

  ngOnInit(): void {
    this.name=this.route.snapshot.paramMap.get('name');
    this.productsService.getProducts().subscribe(item=>{
      this.productsList=item;

      this.cartValues=JSON.parse(localStorage.getItem('cartValue')) || [];
      console.log("first",this.cartValues); 

      for(let i=0;i<this.productsList.length;i++){
        if(this.productsList[i].name===this.name && 
          !this.cartValues.map(item=>item.name).includes(this.name)){
            this.cartValues.push(this.productsList[i]);
            console.log("after push",this.productsList[i]);
            localStorage.setItem('cartValue',JSON.stringify(this.cartValues));
            let cart=JSON.parse(localStorage.getItem('cartValue'));
            console.log("second",cart);         
        }
      }           
    })
  }

  productToDelete(value){
    console.log("item"+value);
    this.cartValues.splice(this.cartValues.findIndex(item=>item.id==value),1);
    localStorage.setItem('cartValue',JSON.stringify(this.cartValues));
  }

  total(quantity,price):number{
    let total=(quantity*price);
    return total;
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

  sum():number{
    let sum=0;
    for(let i in this.cartValues){
      let item=this.cartValues[i];
      sum+=this.total(item.quantity,item.price);
    }
    return sum;
  } 

  onClick(){
    this.router.navigate(['/product-list']);
  }

}
