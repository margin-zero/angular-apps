import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Product } from './product';

@Injectable()

export class ProductService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private productsUrl = 'api/products'; // url to web api

    constructor (private http: Http) {}

    getProducts(): Promise<Product[]> {
        return this.http.get(this.productsUrl)
            .toPromise()
            .then(response => response.json() as Product[])
            .catch(this.handleError);
    }

    getProduct(id: number): Promise<Product> {
        const url = `${this.productsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Product)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('UWAGA !!! An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
