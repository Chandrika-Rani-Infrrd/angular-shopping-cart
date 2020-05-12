import { GetTotalAmountPipe } from './get-total-amount.pipe';

describe('GetTotalAmountPipe', () => {
  it('create an instance', () => {
    const pipe = new GetTotalAmountPipe();
    expect(pipe).toBeTruthy();
  });

  it("does total method works correctly",()=>{
    let item={total:0,quantity:2,price:4};
    const pipe = new GetTotalAmountPipe();
    const result=pipe.getTotalAmount(item.total,item.quantity,item.price);
    expect(result).toBe(8);  
  })
});
