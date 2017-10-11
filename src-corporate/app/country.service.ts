import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Country } from './country';



@Injectable()

export class CountryService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private countriesUrl = 'api/countries'; // url to web api

    constructor (private http: Http) {}

    getCountries(): Promise<Country[]> {

           return this.http.get(this.countriesUrl)
           .toPromise()
           .then(response => response.json() as Country[])
           .catch(this.handleError);

    }

    private handleError(error: any): Promise<any> {
        console.error('UWAGA !!! An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    delete(id: number): Promise<void> {
        const url = `${this.countriesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
          .toPromise()
          .then(() => null)
          .catch(this.handleError);
    }
}
