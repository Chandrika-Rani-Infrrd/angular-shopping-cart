import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from 'src/shared/header/header.component';
import { ProductListComponent } from './productlist/product-list.component';
import { MyCartComponent } from './mycart/my-cart.component';

describe('AppRoutingModelTest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', redirectTo: 'product-list', pathMatch: 'full' },
          { path: 'product-list', component: ProductListComponent },
          { path: 'mycart', component: MyCartComponent },
        ]),
      ],
      declarations: [ProductListComponent, MyCartComponent],
    }).compileComponents();
  });
  it("onClick of 'product-list' navigate to ProductListComponent", async(
    inject([Router, Location], (router: Router, location: Location) => {
      let fixture = TestBed.createComponent(HeaderComponent);
      fixture.detectChanges();

      fixture.debugElement.queryAll(By.css('a'))[0].nativeElement.click();
      router.navigate(['product-list']).then(() => {
        expect(location.path()).toEqual('/product-list');
      });
    })
  ));

  it("onClick of 'mycart' navigate to MyCartComponent", async(
    inject([Router, Location], (router: Router, location: Location) => {
      let fixture = TestBed.createComponent(HeaderComponent);
      fixture.detectChanges();

      fixture.debugElement.queryAll(By.css('a'))[1].nativeElement.click();
      router.navigate(['mycart']).then(() => {
        expect(location.path()).toEqual('/mycart');
      });
    })
  ));

  it('default link navigate to ProductListComponent', async(
    inject([Router, Location], (router: Router, location: Location) => {
      let fixture = TestBed.createComponent(HeaderComponent);
      fixture.detectChanges();

      router.navigate(['']).then(() => {
        expect(location.path()).toBe('/product-list');
      });
    })
  ));
});
