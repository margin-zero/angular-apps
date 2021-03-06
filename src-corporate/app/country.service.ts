import { Injectable }    from '@angular/core';
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

    getCountry(id: number): Promise<Country> {
        const url = `${this.countriesUrl}/${id}`;
        return this.http.get(url)
          .toPromise()
          .then(response => response.json() as Country)
          .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        console.error('UWAGA !!! An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    delete(id: number): Promise<void> {
        const url = `${this.countriesUrl}/${id}`;
        return this.http
          .delete(url, {headers: this.headers})
          .toPromise()
          .then(() => null)
          .catch(this.handleError);
    }

    create(countryName: string): Promise<Country> {
        return this.http
          .post(this.countriesUrl, JSON.stringify({name: countryName}), {headers: this.headers})
          .toPromise()
          .then(res => res.json() as Country)
          .catch(this.handleError);
    }

    update(country: Country): Promise<Country> {
        const url = `${this.countriesUrl}/${country.id}`;
        return this.http
          .put(url, JSON.stringify(country), {headers: this.headers})
          .toPromise()
          .then(() => country)
          .catch(this.handleError);
    }
}
