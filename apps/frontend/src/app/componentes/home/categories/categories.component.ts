import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  public pizzamenu: Product[] = pizzamenu;

  ngOnInit(): void {
    console.log('CategoriesComponent');
  }
}

export interface Product {
  id: number,
  title: string,
  price: number,
  shortdesc: string
}

export const pizzamenu: Product[] = [
  {
      "id": 1,
      "title": "Pepperoni Pizza",
      "price": 14.99,
      "shortdesc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been."
  },
  {
      "id": 2,
      "title": "Four Cheese",
      "price": 13.99,
      "shortdesc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been."
  },
  {
      "id": 3,
      "title": "Vegetarian",
      "price": 9.99,
      "shortdesc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been."
  },
  {
      "id": 4,
      "title": "Barbeque Chicken",
      "price": 13.99,
      "shortdesc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been."
  },
  {
      "id": 5,
      "title": "Ham & Cheese",
      "price": 11.99,
      "shortdesc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been."
  },
  {
      "id": 6,
      "title": "Specialty Pizza",
      "price": 10.99,
      "shortdesc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been."
  }
]