import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const countries = [
      { id: 1, name: 'Albania' },
      { id: 2, name: 'Belgia' },
      { id: 3, name: 'Chorwacja' },
      { id: 4, name: 'Dania' },
      { id: 5, name: 'Estonia' },
      { id: 6, name: 'Polska'},
      { id: 7, name: 'Rosja' }
    ];

    const cities = [
      { id:  1, name: 'Tirana', country_id : 1 },
      { id:  2, name: 'Bruksela', country_id: 2 },
      { id:  3, name: 'Dubrovnik', country_id: 3 },
      { id:  4, name: 'Kopenhaga', country_id: 4 },
      { id:  5, name: 'Tallin', country_id: 5 },
      { id:  6, name: 'Charelroi', country_id: 2},
      { id:  7, name: 'Brugge', country_id: 2},
      { id:  8, name: 'Warszawa', country_id: 6},
      { id:  9, name: 'Wrocław', country_id: 6},
      { id: 10, name: 'Gdańsk', country_id: 6},
      { id: 11, name: 'Kraków', country_id: 6},
      { id: 12, name: 'Poznań', country_id: 6}
    ];

    const corporations = [
      { id: 1, name: 'Albanian Corp.', city: 1, country: 1 },
      { id: 2, name: 'Belgian Choco',  city: 2, country: 2 },
      { id: 3, name: 'Croatian Holidays', city: 3, country: 3 },
      { id: 4, name: 'Kopenhagen Mermaid', city: 4, country: 4 },
      { id: 5, name: 'Tallin Sound Systems', city: 5, country: 5 }
    ];


    return {countries, cities, corporations};
  }
}