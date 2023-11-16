import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-order',
  templateUrl: './menu-order.component.html',
  styleUrls: ['./menu-order.component.css'],
})
export class MenuOrderComponent implements OnInit {
  // Footer style
  classname = 'ct-footer footer-dark';
  ftlogo = 'assets/img/logo-light.png';

  ngOnInit(): void {
    console.log('MenuOrderComponent');
  }
}
