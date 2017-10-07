import { Injectable } from '@angular/core';

import { Country } from './country';


const COUNTRIES : Country[] = [
    { id: 1, name: 'Albania' },
    { id: 2, name: 'Belgia' },
    { id: 3, name: 'Chorwacja' },
    { id: 4, name: 'Dania' },
    { id: 5, name: 'Estonia' },
    { id: 6, name: 'Polska'},
    { id: 7, name: "Rosja" }
  ];


@Injectable()

export class CountryService {


    getCountries(): Promise<Country[]> {
        return Promise.resolve(COUNTRIES);
    }
}