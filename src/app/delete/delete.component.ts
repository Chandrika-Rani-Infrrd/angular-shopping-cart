import { Component } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent {

  productDeleted(value, cartValues) {
    console.log('del', cartValues);
    let deleteditem = cartValues.filter((item) => item.id !== value);
    cartValues = deleteditem;
    localStorage.setItem('cartValue', JSON.stringify(cartValues));
   
  }
}
