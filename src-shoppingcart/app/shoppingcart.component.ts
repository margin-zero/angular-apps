import { Component } from '@angular/core';
import { Location }  from '@angular/common';

import { ShoppingcartService } from './shoppingcart.service';

@Component({
    selector: 'shoppingcart',
    templateUrl: './shoppingcart.component.html',
    styleUrls: ['./shoppingcart.component.css']
})

export class ShoppingcartComponent {

    constructor(
        private shoppingcartService: ShoppingcartService,
        private location: Location
    ) {}

    goBack(): void {
        this.location.back();
    }

    orderProducts(): void {
        alert('składamy zamówienie');
    }

}
