import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'overAllTotal',
  pure: false,
})
export class OverAllTotalPipe implements PipeTransform {
  transform( products: any) {
    return this.overAllTotal(products);
  }

  overAllTotal( products) {
    let sum = products.reduce((acc,item) => acc + item.quantity * item.price, 0);
    return sum;
  }
}
