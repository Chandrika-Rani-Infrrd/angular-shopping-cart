import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MyCartService } from './my-cart.service';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css'],
  providers: [DeleteComponent],
})
export class MyCartComponent implements OnInit {
  myCartValues = [];
  name: string;
  sum = 0;

  constructor(
    private router: Router,
    private mycartService: MyCartService,
    private route: ActivatedRoute,
    private deleteItem: DeleteComponent
  ) {}

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name');
    let cartItem = this.mycartService.getMyCart();
    this.myCartValues = JSON.parse(localStorage.getItem('cartValue')) || [];
    let itemPresent = this.myCartValues.map((item) => {
      if (item.name == this.name) {
        return item.name;
      }
    });
    if (cartItem && !itemPresent.includes(this.name)) {
      this.myCartValues.push(cartItem);
      localStorage.setItem('cartValue', JSON.stringify(this.myCartValues));
      this.myCartValues = JSON.parse(localStorage.getItem('cartValue'));
    }
  }

  public productToDelete(value: number) {
    this.deleteItem.productDeleted(value, this.myCartValues);
  }

  increment(item): number {
    item.quantity += 1;
    localStorage.setItem('cartValue', JSON.stringify(this.myCartValues));
    return item.quantity;
  }

  decrement(item): number {
    if (item.quantity <= 1) item.quantity = 1;
    else item.quantity -= 1;
    localStorage.setItem('cartValue', JSON.stringify(this.myCartValues));
    return item.quantity;
  }

  onClick() {
    this.router.navigate(['/product-list']);
  }
}
