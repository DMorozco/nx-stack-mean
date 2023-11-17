import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  UserDto,
  UserResponse,
  UserService,
} from 'src/app/services/user.service';

@Component({
  selector: 'app-checkoutcontent',
  templateUrl: './checkoutcontent.component.html',
  styleUrls: ['./checkoutcontent.component.css'],
})
export class CheckoutContentComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  public isOne = false;
  public isTwo = true;
  public cart: CartItem[] = cartitem;
  user: UserDto = {
    email: '',
    name: '',
    lastname: '',
    city: '',
    address: '',
    phone: 0,
  };

  constructor(private userService: UserService, private router: Router) {}

  public async createOrUpdateUser() {
    console.log(JSON.stringify(this.user, null, 2));
    if (
      !this.user.email ||
      !this.user.name ||
      !this.user.lastname ||
      !this.user.city ||
      !this.user.address ||
      !this.user.phone
    ) {
      alert('Todos los campos son requeridos');
      return;
    }

    await this.userService
      .createuser(this.user)
      .then((userResponse: UserResponse) => {
        if (userResponse.status == 200) {
          alert(`Bienvenido ${userResponse.data.email}`);
          this.user = {
            email: '',
            name: '',
            lastname: '',
            city: '',
            address: '',
            phone: 0,
          };
        }
      });
  }

  public calculateprice() {
    return this.cart.reduce(
      (subtotal, item) => subtotal + item.qty * item.price,
      0
    );
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
