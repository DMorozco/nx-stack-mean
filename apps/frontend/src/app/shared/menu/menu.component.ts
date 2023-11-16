import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public navigation: NavigationModel[];

  constructor() {
    this.navigation = menuItemsPublic;
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
  submenu?: NavigationModel[];
}

export const menuItemsPublic: NavigationModel[] = [
  {
    id: 1,
    link: '/',
    linkText: 'Inicio',
  },
  {
    id: 2,
    link: '/cart',
    linkText: 'Carrito',
  },
  {
    id: 3,
    link: '/checkout',
    linkText: 'Ir a Pagar',
  },
  {
    id: 4,
    linkText: 'Menú',
    child: true,
    submenu: [
      {
        id: 34,
        link: '/login',
        linkText: 'Iniciar Sesión',
      },
      {
        id: 35,
        link: '/register',
        linkText: 'Registro',
      },
      {
        id: 36,
        link: '/products',
        linkText: 'Productos',
      },
      {
        id: 38,
        link: '/ingredients',
        linkText: 'Ingredientes',
      },
      {
        id: 6,
        linkText: 'Menu',
        link: '/menuitemone',
      },
      {
        id: 37,
        link: '/error',
        linkText: 'Error 404',
      },
    ],
  },

];

export const menuItemsInternal: NavigationModel[] = [
  {
    id: 1,
    link: '/products',
    linkText: 'Productos',
  },
  {
    id: 2,
    link: '/ingredients',
    linkText: 'Ingredientes',
  },
];
