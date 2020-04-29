import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {Location} from "@angular/common";
import { ProductsComponent } from './products/products.component';
import { MycartComponent } from './mycart/mycart.component';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from 'src/shared/header/header.component';

describe('AppRoutingModelTest',()=>{

beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
        {path:'products',component:ProductsComponent},
        {path:'mycart',component:MycartComponent}
      ])],
      declarations: [ProductsComponent,MycartComponent]
    }).compileComponents();
});
    it("onClick of 'products' navigate to ProductsComponent",
    async(inject([Router, Location], (router: Router, location: Location) => {
    let fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges(); 
     
    fixture.debugElement.queryAll(By.css('a'))[0].nativeElement.click();
    router.navigate(['products']).then(() => {
      expect(location.path()).toEqual('/products'); 
      }); 
  })))

  it("onClick of 'mycart' navigate to MyCartComponent",
  async(inject([Router, Location], (router: Router, location: Location) => {
  let fixture = TestBed.createComponent(HeaderComponent);
  fixture.detectChanges(); 

  fixture.debugElement.queryAll(By.css('a'))[1].nativeElement.click();
  router.navigate(['mycart']).then(() => {
    expect(location.path()).toEqual('/mycart'); 
    }); 
})))

 
})