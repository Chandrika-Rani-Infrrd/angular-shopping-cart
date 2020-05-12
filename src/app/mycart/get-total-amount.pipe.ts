import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getTotalAmount'
})
export class GetTotalAmountPipe implements PipeTransform {

  transform(totalAmount:number,quantity:number,price:number): number {
    return this.getTotalAmount(totalAmount,quantity,price);
  }

  getTotalAmount(totalAmount,quantity,price):number{
    totalAmount=(quantity*price);
    return totalAmount;
  }
}
