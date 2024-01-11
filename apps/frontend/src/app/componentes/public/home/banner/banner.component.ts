import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  public banner: ProductDto[] = homeBanner;
  settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.banner-slider-nav-inner',
    dots: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
      }
    }]
  }
  settingsthumb = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow: '.banner-slider-nav .slider-prev',
    nextArrow: '.banner-slider-nav .slider-next',
    asNavFor: '.banner-slider',
    focusOnSelect: true,
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        autoplay: true
      }
    }
    ]
  }

  ngOnInit(): void {
    console.log('BannerComponent');
  }
}

export interface ProductDto {
  id: number,
  title: string,
  subtitle: string,
  shortdesc: string,
  calories: number,
  mozarella: number,
  price: number,
  discount: number,
  img: string,
  category: string,
  offer: boolean
}

export const homeBanner: ProductDto[] = [
  {
      "id": 1,
      "title": "Receta italiana",
      "subtitle": "Pepperoni Pizza con queso",
      "shortdesc": "Las mejores pizzas para compartir",
      "calories": 480,
      "mozarella": 120,
      "price": 10.99,
      "discount": 0,
      "img": "assets/img/pepperoni.png",
      "category": "pepperoni",
      "offer": false
  },
  {
      "id": 2,
      "title": "Wilderness Bless",
      "subtitle": "Jamon y Queso son verduras",
      "shortdesc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      "calories": 800,
      "mozarella": 300,
      "price": 17.99,
      "discount": 0,
      "img": "assets/img/ham.png",
      "category": "Jamon y Queso",
      "offer": false
  },
  {
      "id": 3,
      "title": "Green Delight",
      "subtitle": "Pizza Vegetariana con vegetales",
      "shortdesc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      "calories": 230,
      "mozarella": 100,
      "price": 9.99,
      "discount":40,
      "img": "assets/img/vegetarian.png",
      "category": "Vegetariana",
      "offer": true
  },
  {
      "id": 4,
      "title": "Feeling Cheesy",
      "subtitle": "Pizza especial con doble queso",
      "shortdesc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      "calories": 650,
      "mozarella": 200,
      "price": 12.99,
      "discount": 0,
      "img": "assets/img/special.png",
      "category": "Especial",
      "offer": false
  }
]