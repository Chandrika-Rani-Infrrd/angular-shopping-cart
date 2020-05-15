import { Injectable } from '@angular/core';

@Injectable()
export class MyCartService {

  private selectedItem:any;
  
  constructor(){}
  
  public setId(item) {
    this.selectedItem = item;
  }

  getMyCart() {
     return this.selectedItem;
  }
}
