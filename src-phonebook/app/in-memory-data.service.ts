import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const persons = [
          { id: 1, name: 'Jan', surname: 'Kowalski', department: 'PZ/HR', internal: '2547',
                phone: '+48 (022) 55-44-234', cellular: '110 254 325',
                email: 'jan.kowalski@some-corporation.com', position: 'Specjalista ds. HR' }
            ];
        return {persons};
      }
}
