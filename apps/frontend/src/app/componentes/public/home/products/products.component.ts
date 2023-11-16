import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  closeResult: string;
  modalContent!: Product;

  constructor(private modalService: NgbModal) {
    this.closeResult = '';
  }

  open(content: unknown, item: Product) {
    this.modalContent = item;
    this.modalService.open(content, {
      centered: true,
      size: 'lg',
      windowClass: 'customizeModal',
    });
  }

  public products: Product[] = products;
  settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '.products-section .slider-prev',
    nextArrow: '.products-section .slider-next',
    dots: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  ngOnInit(): void {
    console.log('ProductsComponent');
  }
}

export interface Size {
  size: string;
  state: boolean;
}

export interface AttributeItem {
  title: string;
  addprice: number;
  state: boolean;
}

export interface Attribute {
  name: string;
  icon: string;
  type: 'radio' | 'checkbox';
  items: AttributeItem[];
}

export interface Review {
  img: string;
  name: string;
  date: string;
  rating: number;
  comment: string;
}

export interface Product {
  id: number;
  img: string;
  name: string;
  shortdesc: string;
  price: number;
  rating: number;
  category: number[];
  sizes: Size[];
  sku: string;
  tags: number[];
  attributes: Attribute[];
  longdescription: string;
  reviews: Review[];
}

export const products: Product[] = [
  {
    id: 1,
    img: 'assets/img/pepperoni.png',
    name: 'Pepperoni Pizza',
    shortdesc:
      'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc',
    price: 12.99,
    rating: 4,
    category: [2],
    sizes: [
      {
        size: '11',
        state: true,
      },
      {
        size: '16',
        state: false,
      },
      {
        size: '21',
        state: false,
      },
    ],
    sku: 'N/A',
    tags: [5, 4, 7],
    attributes: [
      {
        name: 'Dough',
        icon: 'flaticon-bread-roll',
        type: 'radio',
        items: [
          {
            title: 'Regular',
            addprice: 0.0,
            state: true,
          },
          {
            title: 'Hand Flipped',
            addprice: 2.0,
            state: false,
          },
          {
            title: 'Multi Grain',
            addprice: 4.0,
            state: false,
          },
        ],
      },
      {
        name: 'Crust',
        icon: 'flaticon-pizza-slice',
        type: 'radio',
        items: [
          {
            title: 'Cheese',
            addprice: 4.0,
            state: true,
          },
          {
            title: 'Butter',
            addprice: 3.25,
            state: false,
          },
        ],
      },
      {
        name: 'Add',
        icon: 'flaticon-pizza-and-cutted-slice',
        type: 'checkbox',
        items: [
          {
            title: 'Chicken',
            addprice: 2.0,
            state: true,
          },
          {
            title: 'Four Cheese',
            addprice: 1.2,
            state: false,
          },
          {
            title: 'Fresh Mushroom',
            addprice: 0.75,
            state: false,
          },
          {
            title: 'Bell Peppers',
            addprice: 0.25,
            state: false,
          },
        ],
      },
      {
        name: 'Cheese',
        icon: 'flaticon-cheese',
        type: 'checkbox',
        items: [
          {
            title: 'Mozarella',
            addprice: 1.0,
            state: true,
          },
          {
            title: 'Cheddar',
            addprice: 1.25,
            state: false,
          },
          {
            title: 'Gruyere',
            addprice: 3.75,
            state: false,
          },
          {
            title: 'Blue Cheese',
            addprice: 0.25,
            state: false,
          },
        ],
      },
    ],
    longdescription:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica',
    reviews: [
      {
        img: 'assets/img/people/1.jpg',
        name: 'Henry Crow',
        date: 'January 13 2021',
        rating: 4,
        comment:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour, or randomised words which don't look even slightly",
      },
      {
        img: 'assets/img/people/2.jpg',
        name: 'Ilyn Rodrick',
        date: 'January 13 2021',
        rating: 4,
        comment:
          'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
      },
      {
        img: 'assets/img/people/3.jpg',
        name: 'Fiyona Lumber',
        date: 'January 13 2021',
        rating: 4,
        comment:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia',
      },
    ],
  },
  {
    id: 2,
    img: 'assets/img/ham.png',
    name: 'Ham and Cheese Pizza',
    shortdesc:
      'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc',
    price: 12.99,
    rating: 4,
    category: [2],
    sizes: [
      {
        size: '11',
        state: true,
      },
      {
        size: '16',
        state: false,
      },
      {
        size: '21',
        state: false,
      },
    ],
    sku: 'N/A',
    tags: [5, 4, 7],
    attributes: [
      {
        name: 'Dough',
        icon: 'flaticon-bread-roll',
        type: 'radio',
        items: [
          {
            title: 'Regular',
            addprice: 0.0,
            state: true,
          },
          {
            title: 'Hand Flipped',
            addprice: 2.0,
            state: false,
          },
          {
            title: 'Multi Grain',
            addprice: 4.0,
            state: false,
          },
        ],
      },
      {
        name: 'Crust',
        icon: 'flaticon-pizza-slice',
        type: 'radio',
        items: [
          {
            title: 'Cheese',
            addprice: 4.0,
            state: true,
          },
          {
            title: 'Butter',
            addprice: 3.25,
            state: false,
          },
        ],
      },
      {
        name: 'Add',
        icon: 'flaticon-pizza-and-cutted-slice',
        type: 'checkbox',
        items: [
          {
            title: 'Chicken',
            addprice: 2.0,
            state: true,
          },
          {
            title: 'Four Cheese',
            addprice: 1.2,
            state: false,
          },
          {
            title: 'Fresh Mushroom',
            addprice: 0.75,
            state: false,
          },
          {
            title: 'Bell Peppers',
            addprice: 0.25,
            state: false,
          },
        ],
      },
      {
        name: 'Cheese',
        icon: 'flaticon-cheese',
        type: 'checkbox',
        items: [
          {
            title: 'Mozarella',
            addprice: 1.0,
            state: true,
          },
          {
            title: 'Cheddar',
            addprice: 1.25,
            state: false,
          },
          {
            title: 'Gruyere',
            addprice: 3.75,
            state: false,
          },
          {
            title: 'Blue Cheese',
            addprice: 0.25,
            state: false,
          },
        ],
      },
    ],
    longdescription:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica',
    reviews: [
      {
        img: 'assets/img/people/1.jpg',
        name: 'Henry Crow',
        date: 'January 13 2021',
        rating: 4,
        comment:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour, or randomised words which don't look even slightly",
      },
      {
        img: 'assets/img/people/2.jpg',
        name: 'Ilyn Rodrick',
        date: 'January 13 2021',
        rating: 4,
        comment:
          'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
      },
      {
        img: 'assets/img/people/3.jpg',
        name: 'Fiyona Lumber',
        date: 'January 13 2021',
        rating: 4,
        comment:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia',
      },
    ],
  },
  {
    id: 3,
    img: 'assets/img/vegetarian.png',
    name: 'Vegetarian Pizza',
    shortdesc:
      'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc',
    price: 12.99,
    rating: 4,
    category: [2],
    sizes: [
      {
        size: '11',
        state: true,
      },
      {
        size: '16',
        state: false,
      },
      {
        size: '21',
        state: false,
      },
    ],
    sku: 'N/A',
    tags: [5, 4, 7],
    attributes: [
      {
        name: 'Dough',
        icon: 'flaticon-bread-roll',
        type: 'radio',
        items: [
          {
            title: 'Regular',
            addprice: 0.0,
            state: true,
          },
          {
            title: 'Hand Flipped',
            addprice: 2.0,
            state: false,
          },
          {
            title: 'Multi Grain',
            addprice: 4.0,
            state: false,
          },
        ],
      },
      {
        name: 'Crust',
        icon: 'flaticon-pizza-slice',
        type: 'radio',
        items: [
          {
            title: 'Cheese',
            addprice: 4.0,
            state: true,
          },
          {
            title: 'Butter',
            addprice: 3.25,
            state: false,
          },
        ],
      },
      {
        name: 'Add',
        icon: 'flaticon-pizza-and-cutted-slice',
        type: 'checkbox',
        items: [
          {
            title: 'Chicken',
            addprice: 2.0,
            state: true,
          },
          {
            title: 'Four Cheese',
            addprice: 1.2,
            state: false,
          },
          {
            title: 'Fresh Mushroom',
            addprice: 0.75,
            state: false,
          },
          {
            title: 'Bell Peppers',
            addprice: 0.25,
            state: false,
          },
        ],
      },
      {
        name: 'Cheese',
        icon: 'flaticon-cheese',
        type: 'checkbox',
        items: [
          {
            title: 'Mozarella',
            addprice: 1.0,
            state: true,
          },
          {
            title: 'Cheddar',
            addprice: 1.25,
            state: false,
          },
          {
            title: 'Gruyere',
            addprice: 3.75,
            state: false,
          },
          {
            title: 'Blue Cheese',
            addprice: 0.25,
            state: false,
          },
        ],
      },
    ],
    longdescription:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica',
    reviews: [
      {
        img: 'assets/img/people/1.jpg',
        name: 'Henry Crow',
        date: 'January 13 2021',
        rating: 4,
        comment:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour, or randomised words which don't look even slightly",
      },
      {
        img: 'assets/img/people/2.jpg',
        name: 'Ilyn Rodrick',
        date: 'January 13 2021',
        rating: 4,
        comment:
          'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
      },
      {
        img: 'assets/img/people/3.jpg',
        name: 'Fiyona Lumber',
        date: 'January 13 2021',
        rating: 4,
        comment:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia',
      },
    ],
  },
  {
    id: 4,
    img: 'assets/img/special.png',
    name: 'Special Pizza',
    shortdesc:
      'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc',
    price: 12.99,
    rating: 4,
    category: [2],
    sizes: [
      {
        size: '11',
        state: true,
      },
      {
        size: '16',
        state: false,
      },
      {
        size: '21',
        state: false,
      },
    ],
    sku: 'N/A',
    tags: [5, 4, 7],
    attributes: [
      {
        name: 'Dough',
        icon: 'flaticon-bread-roll',
        type: 'radio',
        items: [
          {
            title: 'Regular',
            addprice: 0.0,
            state: true,
          },
          {
            title: 'Hand Flipped',
            addprice: 2.0,
            state: false,
          },
          {
            title: 'Multi Grain',
            addprice: 4.0,
            state: false,
          },
        ],
      },
      {
        name: 'Crust',
        icon: 'flaticon-pizza-slice',
        type: 'radio',
        items: [
          {
            title: 'Cheese',
            addprice: 4.0,
            state: true,
          },
          {
            title: 'Butter',
            addprice: 3.25,
            state: false,
          },
        ],
      },
      {
        name: 'Add',
        icon: 'flaticon-pizza-and-cutted-slice',
        type: 'checkbox',
        items: [
          {
            title: 'Chicken',
            addprice: 2.0,
            state: true,
          },
          {
            title: 'Four Cheese',
            addprice: 1.2,
            state: false,
          },
          {
            title: 'Fresh Mushroom',
            addprice: 0.75,
            state: false,
          },
          {
            title: 'Bell Peppers',
            addprice: 0.25,
            state: false,
          },
        ],
      },
      {
        name: 'Cheese',
        icon: 'flaticon-cheese',
        type: 'checkbox',
        items: [
          {
            title: 'Mozarella',
            addprice: 1.0,
            state: true,
          },
          {
            title: 'Cheddar',
            addprice: 1.25,
            state: false,
          },
          {
            title: 'Gruyere',
            addprice: 3.75,
            state: false,
          },
          {
            title: 'Blue Cheese',
            addprice: 0.25,
            state: false,
          },
        ],
      },
    ],
    longdescription:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica',
    reviews: [
      {
        img: 'assets/img/people/1.jpg',
        name: 'Henry Crow',
        date: 'January 13 2021',
        rating: 4,
        comment:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour, or randomised words which don't look even slightly",
      },
      {
        img: 'assets/img/people/2.jpg',
        name: 'Ilyn Rodrick',
        date: 'January 13 2021',
        rating: 4,
        comment:
          'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
      },
      {
        img: 'assets/img/people/3.jpg',
        name: 'Fiyona Lumber',
        date: 'January 13 2021',
        rating: 4,
        comment:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia',
      },
    ],
  },
];
