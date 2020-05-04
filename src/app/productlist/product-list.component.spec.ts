import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';

describe('ProductlistComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  const jsonProduct:any=require('../../assets/products.json');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListComponent ],
      imports:[ HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("expect the HTTP method to be GET",
   inject([HttpTestingController],
    (httpMock: HttpTestingController,) =>{
      const req = httpMock.expectOne('../../assets/products.json');
      expect(req.request.method).toEqual('GET');
  }))

  it("is onclick invoked when click button is clicked",()=>{
    spyOn(component, 'onClick');
    let button =  fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click',null);
    fixture.detectChanges();
    expect(component.onClick).toHaveBeenCalled();
})
});
