import { Injectable } from '@angular/core';

import { City } from './city';


const CITIES : City[] = [
    { id: 1, name: 'Tirana', country_id : 1 },
    { id: 2, name: 'Bruksela', country_id: 2 },
    { id: 3, name: 'Dubrovnik', country_id: 3 },
    { id: 4, name: 'Kopenhaga', country_id: 4 },
    { id: 5, name: 'Tallin', country_id: 5 }
  ];


@Injectable()

export class CityService {


    getCities(): Promise<City[]> {
        return Promise.resolve(CITIES);
    }
}