import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'overAllTotal',
  pure:false
})
export class OverAllTotalPipe implements PipeTransform {

  transform(value:any,products:any){
    return this.overAllTotal(value,products);
  }

  overAllTotal(sum,products){
    sum=products.reduce((acc,item)=>acc+(item.quantity*item.price),0);
    return sum;
  }

}
