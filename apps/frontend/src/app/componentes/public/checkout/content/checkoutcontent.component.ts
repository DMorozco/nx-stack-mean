import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import {
  OrderDto,
  OrderItemDto,
  OrderResponse,
  OrderService,
} from 'src/app/services/order.service';
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
  public isOne = false;
  public isTwo = true;
  public products: OrderItemDto[] = orderItems;
  public user: UserDto = {
    email: '',
    name: '',
    lastname: '',
    city: '',
    address: '',
    phone: 0,
  };

  constructor(
    private userService: UserService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('CheckoutContentComponent');
  }

  public async processOrder() {
    await this.createOrUpdateUser();
    await this.createOrder();
  }

  public async createOrUpdateUser() {
    if (
      !this.user.email ||
      !this.user.name ||
      !this.user.lastname ||
      !this.user.city ||
      !this.user.address ||
      !this.user.phone
    ) {
      alert('Todos los campos son requercodeos');
      return;
    }

    await this.userService
      .createuser(this.user)
      .then((userResponse: UserResponse) => {
        if (userResponse.status == 200) {
          alert(`Bienvencodeo ${userResponse.data.email}`);
        }
      });
  }

  public async createOrder() {
    const order: OrderDto = {
      orderId: uuidv4(),
      customer: this.user,
      products: orderItems,
      createDate: new Date(),
      total: this.calculateprice(),
      status: 'created',
    };
    console.log(JSON.stringify(order, null, 2));

    await this.orderService
      .createorder(order)
      .then((orderResponse: OrderResponse) => {
        if (orderResponse.status == 200) {
          alert(`orden creada ${orderResponse}`);
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
    return this.products.reduce(
      (subtotal, item) => subtotal + item.quantity * item.price,
      0
    );
  }
}

export const orderItems: OrderItemDto[] = [
  {
    code: 1,
    img: 'assets/img/1.png',
    name: 'Pepperoni',
    quantity: 4,
    price: 9.99,
    size: 14,
    toppings: [
      {
        code: 1,
        name: 'Fresh Mushroom',
        price: 0.75,
      },
      {
        code: 1,
        name: 'Chicken',
        price: 2.45,
      },
      {
        code: 1,
        name: 'Mozarella',
        price: 1.75,
      },
    ],
    flavours: ['Regular dough', 'Cheese Crust'],
  },
  {
    code: 2,
    img: 'assets/img/2.png',
    name: 'Vegetarian',
    quantity: 2,
    price: 5.99,
    flavours: ['Regular dough', 'Cheese Crust'],
    size: 14,
  },
  {
    code: 3,
    img: 'assets/img/3.png',
    name: 'Italian Jalapeno Special',
    quantity: 1,
    price: 12.99,
    flavours: ['Regular dough', 'Cheese Crust'],
    size: 14,
  },
  {
    code: 4,
    img: 'assets/img/4.png',
    name: 'Barbeque Chicken',
    quantity: 4,
    price: 9.99,
    flavours: ['Regular dough', 'Cheese Crust'],
    size: 14,
  },
  {
    code: 5,
    img: 'assets/img/5.png',
    name: 'Four Cheese',
    quantity: 2,
    price: 5.99,
    flavours: ['Regular dough', 'Cheese Crust'],
    size: 14,
  },
  {
    code: 6,
    img: 'assets/img/6.png',
    name: 'Swiss Mushroom',
    quantity: 1,
    price: 12.99,
    flavours: ['Regular dough', 'Cheese Crust'],
    size: 14,
  },
];
