import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const persons = [
          { id: 1, name: 'Jan Kowalski', department: 'HR',
                phone: '+48 (022) 55-44-234', cellular: '110 254 325', email: 'jkowalski@hr.pl', position: 'Specjalista ds. HR' },
          { id: 2, name: 'Zuzanna Nowak', department: 'HR',
                phone: '+48 (022) 55-42-234', cellular: '111 257 335', email: 'znowak@hr.pl', position: 'Młodszy Specjalista ds. HR' },
          { id: 3, name: 'Jakub Wiśniewski', department: 'HR',
                phone: '+48 (022) 35-44-231', cellular: '110 444 325', email: 'jwisniewski@hr.pl', position: 'Rekruter' },
          { id: 4, name: 'Lena Wójcik', department: 'HR',
                phone: '+48 (022) 52-44-232', cellular: '111 254 321', email: 'lwojcik@hr.pl', position: 'Starszy Specjalista' },
          { id: 5, name: 'Filip Kowalczyk', department: 'HR',
                phone: '+48 (022) 51-33-234', cellular: '101 344 875', email: 'fkowalczyk@hr.pl', position: 'Kierownik działu' },
          { id: 6, name: 'Maja Kamińska', department: 'HR',
                phone: '+48 (022) 51-24-544', cellular: '111 346 985', email: 'mkaminska@hr.pl', position: 'Dyrektor departamentu' },
        ];
        return {persons};
      }
}
