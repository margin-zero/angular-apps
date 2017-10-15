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
      { id: 1, name: 'Albanian Corp.', city: 1, ceo_name: 'Adalina Agalliu',
        website: 'www.albanian-corp.com', email: 'office@albanian-corp.com' },
      { id: 2, name: 'Belgian Choco',  city: 2, ceo_name: 'Bruno Chocolatti',
        website: 'www.belgian-choco.com', email: 'bureau@belgian-choco.com' },
      { id: 3, name: 'Croatian Holidays', city: 3, ceo_name: 'Zarko Zeljic',
        website: 'www.croatian-holidays.com', email: 'office@croatian-holidays.com' },
      { id: 4, name: 'Kopenhagen Mermaid', city: 4, ceo_name: 'Stellan Hangvard',
        website: 'www.kopenhagen-mermaid.com', email: 'office@kopenhagen-mermaid.com' },
      { id: 5, name: 'Tallin Sound Systems', city: 5, ceo_name: 'Stobe Kvinuus',
        website: 'www.tallinss.com', email: 'office@tallinss.com' }
    ];


    return {countries, cities, corporations};
  }
}
