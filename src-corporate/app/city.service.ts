import { Injectable }    from '@angular/core';
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

    getCity(id: number): Promise<City> {
        const url = `${this.citiesUrl}/${id}`;
        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as City)
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

    create(cityName: string, countryId: number): Promise<City> {
        return this.http
        .post(this.citiesUrl, JSON.stringify({name: cityName, country_id: countryId}), {headers: this.headers})
        .toPromise()
        .then(res => res.json() as City)
        .catch(this.handleError);
    }

    update(city: City): Promise<City> {
        const url = `${this.citiesUrl}/${city.id}`;
        return this.http
        .put(url, JSON.stringify(city), {headers: this.headers})
        .toPromise()
        .then(() => city)
        .catch(this.handleError);
    }
}
