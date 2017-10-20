import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Person } from './person';

@Injectable()

export class PersonService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private personsUrl = 'api/persons'; // url to web api

    constructor (private http: Http) {}

    getPersons(): Promise<Person[]> {

        return this.http.get(this.personsUrl)
            .toPromise()
            .then(response => response.json() as Person[])
            .catch(this.handleError);
    }

    getPerson(id: number): Promise<Person> {
        const url = `${this.personsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Person)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('UWAGA !!! An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
