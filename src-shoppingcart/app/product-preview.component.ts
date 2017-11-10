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
    styleUrls: ['./product-preview.component.css']
})

export class ProductPreviewComponent implements OnInit {

    private product: Product;
    private sub: any;
    private productId: number;
    private cartId: number;

    private shoppingcartItem = new ShoppingcartItem;

    constructor(
        private productService: ProductService,
        private router: Router,
        private route: ActivatedRoute,
        private location: Location,
        private shoppingcartService: ShoppingcartService
    ) {}


    ngOnInit(): void {

        // odczytujemy wartości parametrów z routera
        this.shoppingcartItem.productId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
        this.cartId = parseInt(this.route.snapshot.paramMap.get('cartId'), 10);

        if ((this.cartId >= 0) && (!this.shoppingcartService.items[this.cartId])) { // jeśli nie ma wskazanej pozycji w koszyku
            this.router.navigate(['/catalog']);                                     // to przechodzimy do katalogu
        }

        this.productService
          .getProduct(this.shoppingcartItem.productId)              // pobierz produkt z bazy danych...
          .then(
              product => this.setProduct(product),          // ... a potem wywołaj setProduct - jeśli sukces
              msg => this.location.back() );                // ... albo przekieruj na poprzednią stronę - jeśli błąd

    }

    setProduct(product): void {
        this.product = product;                                         // przepisz pobrane produkt do lokalnej zmiennej
        this.shoppingcartItem.name = this.product.name;                 // przepisz nazwę produktu do dodawanej pozycji koszyka
        this.shoppingcartItem.itemCount = 1;
        this.shoppingcartItem.itemPrice = this.product.priceBrutto;
        this.shoppingcartItem.previewFile = this.product.previewFile;

        if (this.cartId >= 0) {
            this.shoppingcartItem.itemCount = this.shoppingcartService.getItems()[this.cartId].itemCount;
            this.shoppingcartItem.color = this.shoppingcartService.getItems()[this.cartId].color;
            this.shoppingcartItem.size = this.shoppingcartService.getItems()[this.cartId].size;
        }
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


    updateShoppingcart(cartId): void {
        this.shoppingcartItem.itemValue = this.shoppingcartItem.itemPrice * this.shoppingcartItem.itemCount;
        this.shoppingcartService.updateItem(this.shoppingcartItem, cartId);
        this.location.back();
    }


    goBack(): void {
        this.location.back();
    }

}
