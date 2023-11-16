import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productsadmin',
  templateUrl: './productsadmin.component.html',
  styleUrls: ['./productsadmin.component.css'],
})
export class ProductsAdminComponent implements OnInit {
  // Footer style
  classname = 'ct-footer footer-dark';
  ftlogo = 'assets/img/logo-light.png';

  ngOnInit(): void {
    console.log('ProductAdminComponent');
  }
}

