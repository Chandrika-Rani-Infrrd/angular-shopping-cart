import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { By } from '@angular/platform-browser';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("does products name match to its price",()=>{
    const [first,second]=component.products;
    expect(first.name).toEqual("Nike Shoes");
    expect(first.price).toEqual(8000);
    expect(second.name).toEqual("college Bag");
    expect(second.price).toEqual(450); 
  })

  it("is onclick invoked when click button is clicked",()=>{
    spyOn(component, 'onClick');
    let button =  fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click',null);
    fixture.detectChanges();
    expect(component.onClick).toHaveBeenCalled();
})
});
