import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement} from '@angular/core';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let debug:DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    debug=fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have header equal to Shopping App',()=>{
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const headComponent = fixture.nativeElement;
    expect(headComponent.querySelector('h1').textContent).toContain('Shopping App');
  })

  it('should have anchor tag equal to products',()=>{
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const products = fixture.debugElement.query(By.css('.navbarContent1')).nativeElement;
    expect(products.innerHTML).toBe('Products');  
  }) 

  it('should have anchor tag equal to mycart',()=>{
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const MyCart = fixture.debugElement.query(By.css('.navbarContent2')).nativeElement;
    expect(MyCart.innerHTML).toBe('MyCart');  
  })  
   

});
