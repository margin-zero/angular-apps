import { Component, OnInit }                from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location }                         from '@angular/common';

import { Product }          from './product';
import { ProductService }   from './product.service';

import { ShoppingcartItem } from './shoppingcart-item';

import { ShoppingcartService } from './shoppingcart.service';


@Component({
    selector: 'product-preview',
    templateUrl: './product-preview.component.html',
    styleUrls: []
})

export class ProductPreviewComponent implements OnInit {

    private product: Product;
    private sub: any;
    private productId: number;

    private shoppingcartItem = new ShoppingcartItem;

    constructor(
        private productService: ProductService,
        private router: Router,
        private route: ActivatedRoute,
        private location: Location,
        private shoppingcartService: ShoppingcartService
    ) {}


    ngOnInit(): void {
        this.sub = this.route.params.subscribe((params) => {  // subskrybujemy parametry z routera
            this.shoppingcartItem.productId = params['id'];
        });

        this.productService
          .getProduct(this.shoppingcartItem.productId)              // pobierz produkt z bazy danych...
          .then(product => this.setProduct(product));               // ...a potem wywołaj setProduct
    }

    setProduct(product): void {
        this.product = product;                                         // przepisz pobrane produkt do lokalnej zmiennej
        this.shoppingcartItem.name = this.product.name;                 // przepisz nazwę produktu do dodawanej pozycji koszyka
        this.shoppingcartItem.itemCount = 1;
        this.shoppingcartItem.itemPrice = this.product.priceBrutto;
        this.shoppingcartItem.previewFile = this.product.previewFile;
    }

    addToShoppingcart(): void {
        this.shoppingcartItem.itemValue = this.shoppingcartItem.itemPrice * this.shoppingcartItem.itemCount;

        if (    !this.shoppingcartItem.productId ||
                !this.shoppingcartItem.size ||
                !this.shoppingcartItem.color ||
                !this.shoppingcartItem.itemPrice ||
                !this.shoppingcartItem.itemCount
            ) {
                alert('Podaj wszystkie informacje...');
            } else {
                this.shoppingcartService.putItem(this.shoppingcartItem);
                this.location.back();
            }
    }

    goBack(): void {
        this.location.back();
    }

}