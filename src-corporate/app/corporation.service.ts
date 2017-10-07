import { Injectable } from '@angular/core';

import { Corporation } from './corporation';


const CORPORATIONS : Corporation[] = [
    { id: 1, name: 'Albanian Corp.', city: 1, country: 1 },
    { id: 2, name: 'Belgian Choco',  city: 2, country: 2 },
    { id: 3, name: 'Croatian Holidays', city: 3, country: 3 },
    { id: 4, name: 'Kopenhagen Mermaid', city: 4, country: 4 },
    { id: 5, name: 'Tallin Sound Systems', city: 5, country: 5 }
  ];


@Injectable()

export class CorporationService {

    getCorporations(): Promise<Corporation[]> {
        return Promise.resolve(CORPORATIONS);
    }

    getCorporation( id: number ): Promise<Corporation> {
        return this.getCorporations()
        .then(corporations => corporations.find(corporation => corporation.id === id));
    }
}