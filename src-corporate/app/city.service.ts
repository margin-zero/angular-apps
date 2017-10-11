import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { City } from './city';

@Injectable()

export class CityService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private citiesUrl = 'api/cities'; // url to web api

    constructor (private http: Http) {}

    getCities(): Promise<City[]> {

           return this.http.get(this.citiesUrl)
           .toPromise()
           .then(response => response.json() as City[])
           .catch(this.handleError);

    }


    private handleError(error: any): Promise<any> {
        console.error('UWAGA !!! An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }

    delete(id: number): Promise<void> {
        const url = `${this.citiesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
          .toPromise()
          .then(() => null)
          .catch(this.handleError);
    }
}
