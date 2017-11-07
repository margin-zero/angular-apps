import { Component } from '@angular/core';

import { ShoppingcartService } from './shoppingcart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Moduł: Shopping Cart';

  constructor(
    private shoppingcartService: ShoppingcartService
) {}


}
