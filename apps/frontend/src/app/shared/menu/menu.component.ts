import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public navigation: NavigationModel[];

  constructor() {
    this.navigation = menuItems
   }

  ngOnInit(): void {
    console.log('MenuComponent');
  }
}

export interface NavigationModel {
  id: number;
  link?: string;
  linkText: string;
  child?: boolean;
  open?: boolean;
  submenu?: NavigationModel[]
}

export const menuItems: NavigationModel[] = [
  {
      "id": 1,
      "linkText": "Home Pages",
      "child": true,
      "submenu": [
          {
              "id": 11,
              "link": "/",
              "linkText": "Home v1"
          },
          {
              "id": 12,
              "link": "/home-v2",
              "linkText": "Home v2"
          },
          {
              "id": 13,
              "link": "/home-v3",
              "linkText": "Home v3"
          },
          {
              "id": 14,
              "link": "/home-v4",
              "linkText": "Home v4"
          }
      ]
  },
  {
      "id": 3,
      "linkText": "Blog",
      "child": true,
      "submenu": [
          {
              "id": 21,
              "linkText": "Blog Archive",
              "child": true,
              "submenu": [
                  {
                      "id": 211,
                      "linkText": "Grid View",
                      "link": "/blog-grid"
                  },
                  {
                      "id": 212,
                      "linkText": "List View",
                      "link": "/blog-list"
                  },
                  {
                      "id": 213,
                      "linkText": "Masonry",
                      "link": "/blog-masonry"
                  },
                  {
                      "id": 214,
                      "linkText": "Full Width",
                      "link": "/blog-full-width"
                  }
              ]
          },
          {
              "id": 22,
              "link": "/blog-single/1",
              "linkText": "Blog Single"
          }
      ]
  },
  {
      "id": 3,
      "linkText": "Pages",
      "child": true,
      "submenu": [
          {
              "id": 31,
              "link": "/about",
              "linkText": "About Us"
          },
          {
              "id": 32,
              "link": "/login",
              "linkText": "Login"
          },
          {
              "id": 33,
              "link": "/register",
              "linkText": "Sign Up"
          },
          {
              "id": 34,
              "link": "/checkout",
              "linkText": "Checkout"
          },
          {
              "id": 35,
              "link": "/cart",
              "linkText": "Cart"
          },
          {
              "id": 36,
              "link": "/legal",
              "linkText": "Legal"
          },
          {
              "id": 37,
              "link": "/error",
              "linkText": "Error 404"
          }
      ]
  },
  {
      "id": 4,
      "linkText": "Menu",
      "child": true,
      "submenu": [
          {
              "id": 41,
              "link": "/menu-v1",
              "linkText": "Menu v1"
          },
          {
              "id": 42,
              "link": "/menu-v2",
              "linkText": "Menu v2"
          },
          {
              "id": 43,
              "link": "/menu-item-v1/1",
              "linkText": "Menu Item v1"
          },
          {
              "id": 44,
              "link": "/menu-item-v2/1",
              "linkText": "Menu Item v2"
          }
      ]
  },
  {
      "id": 5,
      "linkText": "Locations",
      "link": "/locations"
  },
  {
      "id": 6,
      "linkText": "Contact Us",
      "link": "/contact"
  }
]