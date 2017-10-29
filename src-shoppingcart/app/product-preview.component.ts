import { Component, OnInit }                from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location }                         from '@angular/common';

import { Product }          from './product';
import { ProductService }   from './product.service';


@Component({
    selector: 'product-preview',
    templateUrl: './product-preview.component.html',
    styleUrls: []
})

export class ProductPreviewComponent implements OnInit {

    private product: Product;
    private sub: any;
    private productId: number;

    constructor(
        private productService: ProductService,
        private router: Router,
        private route: ActivatedRoute,
        private location: Location
    ) {}


    ngOnInit(): void {
        this.sub = this.route.params.subscribe((params) => {  // subskrybujemy parametry z routera
            this.productId = params['id'];
        });

        this.productService
          .getProduct(this.productId)                               // pobierz produkt z bazy danych...
          .then(product => this.setProduct(product));               // ...a potem wywołaj setProduct

    }

    setProduct(product): void {
        this.product = product;                                         // przepisz pobrane produkt do lokalnej zmiennej
    }

}
