import { Injectable } from '@angular/core';

import { ShoppingcartItem } from './shoppingcart-item';

@Injectable()

export class ShoppingcartService {

    items: ShoppingcartItem[] = [];

    getItems(): ShoppingcartItem[] {
        return this.items;
    }

    putItem(item: ShoppingcartItem): void {
        this.items.push(item);
        alert(this.items.length + ' elementów w koszyku');
    }

    private handleError(error: any): Promise<any> {
        console.error('UWAGA !!! An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
