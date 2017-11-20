import { Component, OnInit }                from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location }                         from '@angular/common';

import { Product }          from './product';
import { ProductService }   from './product.service';


@Component({
    selector: 'product-catalog',
    templateUrl: './product-catalog.component.html',
    styleUrls: []
})

export class ProductCatalogComponent implements OnInit {

    private products: Product[];

    constructor(
        private productService: ProductService,
        private router: Router,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.productService
          .getProducts()                               // pobierz osoby z bazy danych...
          .then(products => this.setProducts(products)); // ...a potem wywołaj setPersons
    }

    setProducts(products): void {
        this.products = products;                                         // przepisz pobrane osoby do lokalnej tablicy
    }

}
