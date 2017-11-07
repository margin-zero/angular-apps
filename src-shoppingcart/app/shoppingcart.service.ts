import { Injectable } from '@angular/core';

import { ShoppingcartItem } from './shoppingcart-item';

@Injectable()

export class ShoppingcartService {

    items: ShoppingcartItem[] = [];

    getItems(): ShoppingcartItem[] {
        return this.items;
    }

    putItem(item: ShoppingcartItem): void {
        const i = this.items.length;
        this.items.push(item);
        if (this.items.length > i) {
            alert('pozycja została dodana do koszyka');
        } else {
            alert('pozycja nie została dodana do koszyka');
        }
    }

    deleteItem(index): void {
        this.items.splice(index, 1);
    }

    private handleError(error: any): Promise<any> {
        console.error('UWAGA !!! An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    itemCount(): number {
        return this.items.length;
    }
}
