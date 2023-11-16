import { Component, OnInit } from '@angular/core';
import { CartListDto } from '../cartlist/cartlist.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // navigation
  public navmethod: boolean;
  toggleNav() {
    this.navmethod = !this.navmethod;
  }
  // cartmethod
  public cartmethod: boolean;
  cartToggle() {
    this.cartmethod = !this.cartmethod;
  }
  // Search
  public searchmethod: boolean;
  searchToggle() {
    this.searchmethod = !this.searchmethod;
  }
  // Cart
  public cart: CartListDto[] = carlist;

  constructor() { 
    this.navmethod = true;
    this.cartmethod = true;
    this.searchmethod = true;
  }

  ngOnInit(): void {
    console.log('HeaderComponent');
  }
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
