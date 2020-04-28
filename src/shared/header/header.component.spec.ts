import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
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

  it('should have ancer tag equal to products',()=>{
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const headComponent = fixture.nativeElement;
    expect(headComponent.querySelector('a').textContent).toContain('Products');
  }) 

  /* it('should have ancer tag equal to MyCart',()=>{
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const headComponent = fixture.nativeElement;
    expect(headComponent.querySelector('a').textContent).toContain('MyCart');
  })  */ 

});
