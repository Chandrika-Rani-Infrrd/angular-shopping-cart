import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyCartService } from './my-cart.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css'],
})
export class MyCartComponent implements OnInit {
  cartItem = [];
  cart = 'cartValue';

  constructor(private router: Router, private mycartService: MyCartService) {}

  ngOnInit(): void {
    this.cartItem = this.mycartService.getMyCart();
  }

  productToDelete(data) {
    this.cartItem = this.mycartService.productDeletedFromCart(data);
  }

  increment(item) {
    item.quantity += 1;
    this.mycartService.incrementQuantity(this.cartItem);
  }

  decrement(item) {
    if (item.quantity <= 1) item.quantity = 1;
    else item.quantity -= 1;
    this.mycartService.decrementQuantity(this.cartItem);
  }

  onClick() {
    this.router.navigate(['/product-list']);
  }
}
