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
    return {countries};
  }
  
}