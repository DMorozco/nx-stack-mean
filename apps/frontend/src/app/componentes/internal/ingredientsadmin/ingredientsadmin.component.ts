import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredientsadmin',
  templateUrl: './ingredientsadmin.component.html',
  styleUrls: ['./ingredientsadmin.component.css'],
})
export class IngredientsAdminComponent implements OnInit {
  // Footer style
  classname = 'ct-footer footer-dark';
  ftlogo = 'assets/img/logo-light.png';

  ngOnInit(): void {
    console.log('IngredientsAdminComponent');
  }
}

