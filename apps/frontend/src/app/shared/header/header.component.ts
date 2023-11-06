import { Component, OnInit } from '@angular/core';

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
  public cart: { id: number}[] = [];

  constructor() { 
    this.navmethod = true;
    this.cartmethod = true;
    this.searchmethod = true;
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

}
