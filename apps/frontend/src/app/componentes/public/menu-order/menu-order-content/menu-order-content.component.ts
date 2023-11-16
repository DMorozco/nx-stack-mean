import { Component, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../../home/products/products.component';

@Component({
  selector: 'app-menu-order-content',
  templateUrl: './menu-order-content.component.html',
  styleUrls: ['./menu-order-content.component.css'],
})
export class MenuOrderContentComponent implements AfterContentInit {
  public productdetails;
  public blogtags;
  public productcategory;
  public counter: number;

  constructor(private router: ActivatedRoute) {
    this.productdetails = products;
    this.blogtags = blogtags;
    this.productcategory = productcategory;
    this.counter = 1;
  }

  public getBlogTags(items: number[]) {
    const elems = blogtags.filter((item: Blogtags) => {
      return items.includes(item.id);
    });
    return elems;
  }

  public getProductCategory(items: number[]) {
    const elems = productcategory.filter((item: Productcategory) => {
      return items.includes(item.id);
    });
    return elems;
  }

  public setProducts(id: number) {
    this.productdetails = products.filter((item: Product) => {
      return item.id == id;
    });
  }

  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }

  ngAfterContentInit(): void {
    this.setProducts(this.router.snapshot.params['id']);
  }
}

export interface Blogtags {
  id: number;
  title: string;
}

export const blogtags: Blogtags[] = [
  {
    id: 1,
    title: 'Food',
  },
  {
    id: 2,
    title: 'Foodie',
  },
  {
    id: 3,
    title: 'Chicken',
  },
  {
    id: 4,
    title: 'Meat',
  },
  {
    id: 5,
    title: 'Health',
  },
  {
    id: 6,
    title: 'Vegan',
  },
  {
    id: 7,
    title: 'Fit',
  },
  {
    id: 8,
    title: 'Fruit',
  },
];

export interface Productcategory {
  id: number;
  title: string;
  img: string;
  lgimg: string;
  shortdesc: string;
}

export const productcategory: Productcategory[] = [
  {
    id: 1,
    title: 'Sides',
    img: 'assets/img/categories/1.jpg',
    lgimg: 'assets/img/categories-lg/1.jpg',
    shortdesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
  },
  {
    id: 2,
    title: 'Pizzas',
    img: 'assets/img/categories/2.jpg',
    lgimg: 'assets/img/categories-lg/2.jpg',
    shortdesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
  },
  {
    id: 3,
    title: 'Salads',
    img: 'assets/img/categories/3.jpg',
    lgimg: 'assets/img/categories-lg/3.jpg',
    shortdesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
  },
  {
    id: 4,
    title: 'Pasta',
    img: 'assets/img/categories/7.jpg',
    lgimg: 'assets/img/categories-lg/4.jpg',
    shortdesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
  },
  {
    id: 5,
    title: 'Desserts',
    img: 'assets/img/categories/4.jpg',
    lgimg: 'assets/img/categories-lg/5.jpg',
    shortdesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
  },
  {
    id: 6,
    title: 'Beverages',
    img: 'assets/img/categories/5.jpg',
    lgimg: 'assets/img/categories-lg/1.jpg',
    shortdesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
  },
  {
    id: 7,
    title: 'Offers',
    img: 'assets/img/categories/8.jpg',
    lgimg: 'assets/img/categories-lg/2.jpg',
    shortdesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
  },
];
