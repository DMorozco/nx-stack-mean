import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit {
  // Cart
  public cart: CartListDto[];

  constructor() { 
    this.cart = []
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
  
  public calculateprice() {
    return this.cart.reduce((subtotal, item) => subtotal + item.qty * item.price, 0)
  };
}

export interface CartListDto {
  id: number, 
  img: string,
  name: string,
  qty: number, 
  price: number,
  flavours: string[],
}