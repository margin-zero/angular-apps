import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Corporation } from './corporation';

@Injectable()

export class CorporationService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private corporationsUrl = 'api/corporations'; // url to web api

    constructor (private http: Http) {}

    getCorporations(): Promise<Corporation[]> {
 
           return this.http.get(this.corporationsUrl)
           .toPromise()
           .then(response => response.json() as Corporation[])
           .catch(this.handleError);     
    }

    private handleError(error: any): Promise<any> {
        console.error('UWAGA !!! An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    
    getCorporation( id: number ): Promise<Corporation> {
        return this.getCorporations()
        .then(corporations => corporations.find(corporation => corporation.id === id));
    }
}