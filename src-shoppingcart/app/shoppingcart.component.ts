import { Component }                from '@angular/core';
// import { Component, OnInit }                from '@angular/core';
// import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location }                         from '@angular/common';

// import { Product }          from './product';
// import { ProductService }   from './product.service';

import { ShoppingcartService } from './shoppingcart.service';



@Component({
    selector: 'shoppingcart',
    templateUrl: './shoppingcart.component.html',
    styleUrls: []
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
