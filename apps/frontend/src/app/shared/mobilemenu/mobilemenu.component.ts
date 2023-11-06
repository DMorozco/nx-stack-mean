import { AfterContentInit, Component } from '@angular/core';
import { NavigationModel, menuItems } from '../menu/menu.component';

@Component({
  selector: 'app-mobilemenu',
  templateUrl: './mobilemenu.component.html',
  styleUrls: ['./mobilemenu.component.css']
})
export class MobilemenuComponent implements AfterContentInit {
  public navigation: NavigationModel[];
  public open: boolean;

  constructor() { 
    this.navigation = menuItems
    this.open = false;
  }

  trigger(item: NavigationModel){
    item.open = !item.open;
  }

  ngAfterContentInit(): void {
    console.log('MobilemenuComponent');
  }

}
