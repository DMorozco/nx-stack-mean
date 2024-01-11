import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartcontent',
  templateUrl: './cartcontent.component.html',
  styleUrls: ['./cartcontent.component.css'],
})
export class CartContentComponent implements OnInit {
  // Cart
  taxvalue = 9.99;
  public cart: CartItem[] = cartitem;
  // Increment decrement
  public item = [];
  increment(item: CartItem) {
    item.qty += 1;
  }
  decrement(item: CartItem) {
    item.qty -= 1;
  }
  public calculateprice() {
    return this.cart.reduce(
      (subtotal, item) => subtotal + item.qty * item.price,
      0
    );
  }

  ngOnInit(): void {
    console.log('ContenetComponent');
  }
}

export interface CartItem {
  id: number;
  img: string;
  name: string;
  qty: number;
  price: number;
  flavours: string[];
}

export const cartitem: CartItem[] = [
  {
    id: 1,
    img: 'assets/img/pepperoni.png',
    name: 'Pepperoni',
    qty: 4,
    price: 9.99,
    flavours: ['14 Inches', 'Extra Cheese', 'Cheese Crust'],
  },
  {
    id: 2,
    img: 'assets/img/vegetarian.png',
    name: 'Vegetariana',
    qty: 2,
    price: 5.99,
    flavours: ['14 Inches'],
  },
  {
    id: 3,
    img: 'assets/img/ham.png',
    name: 'Italiana Jalapeñ especial',
    qty: 1,
    price: 12.99,
    flavours: ['14 Inches', 'Extra Cheese', 'Cheese Crust'],
  },
  {
    id: 4,
    img: 'assets/img/special.png',
    name: 'Pollo BB',
    qty: 4,
    price: 9.99,
    flavours: ['12 Inches', 'Extra Cheese', 'Cheese Crust', 'Added Chicken'],
  },
  {
    id: 5,
    img: 'assets/img/special.png',
    name: 'Cuatro quesos',
    qty: 2,
    price: 5.99,
    flavours: ['12 Inches', 'Added Chicken'],
  },
  {
    id: 6,
    img: 'assets/img/ham.png',
    name: 'Hongo suizo',
    qty: 1,
    price: 12.99,
    flavours: ['12 Inches', 'Extra Cheese', 'Cheese Crust', 'Added Chicken'],
  },
];
