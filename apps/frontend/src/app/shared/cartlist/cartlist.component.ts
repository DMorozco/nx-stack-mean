import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css'],
})
export class CartlistComponent implements OnInit {
  public cart: CartListDto[];

  constructor() {
    this.cart = carlist;
  }

  ngOnInit(): void {
    console.log('CartlistComponent');
  }

  public calculateprice() {
    return this.cart.reduce(
      (subtotal, item) => subtotal + item.qty * item.price,
      0
    );
  }
}

export interface CartListDto {
  id: number;
  img: string;
  name: string;
  qty: number;
  price: number;
  flavours: string[];
}

const carlist: CartListDto[] = [
  {
    id: 1,
    img: 'assets/img/1.png',
    name: 'Pepperoni',
    qty: 4,
    price: 9.99,
    flavours: ['14 Inches', 'Extra Cheese', 'Cheese Crust'],
  },
  {
    id: 2,
    img: 'assets/img/2.png',
    name: 'Vegetarian',
    qty: 2,
    price: 5.99,
    flavours: ['14 Inches'],
  },
  {
    id: 3,
    img: 'assets/img/3.png',
    name: 'Italian Jalapeno Special',
    qty: 1,
    price: 12.99,
    flavours: ['14 Inches', 'Extra Cheese', 'Cheese Crust'],
  },
  {
    id: 4,
    img: 'assets/img/4.png',
    name: 'Barbeque Chicken',
    qty: 4,
    price: 9.99,
    flavours: ['12 Inches', 'Extra Cheese', 'Cheese Crust', 'Added Chicken'],
  },
  {
    id: 5,
    img: 'assets/img/5.png',
    name: 'Four Cheese',
    qty: 2,
    price: 5.99,
    flavours: ['12 Inches', 'Added Chicken'],
  },
  {
    id: 6,
    img: 'assets/img/6.png',
    name: 'Swiss Mushroom',
    qty: 1,
    price: 12.99,
    flavours: ['12 Inches', 'Extra Cheese', 'Cheese Crust', 'Added Chicken'],
  },
];
