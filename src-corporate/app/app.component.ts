import { Component } from '@angular/core';

import { Corporation } from './corporation';

const CORPORATIONS : Corporation[] = [
  { id: 1, name: 'Albanian Corp.', city: 'Tirana', country: 'Albania' },
  { id: 2, name: 'Belgian Choco',  city: 'Bruksela', country: 'Belgia' },
  { id: 3, name: 'Croatian Holidays', city: 'Dobrovnik', country: 'Chorwacja' },
  { id: 4, name: 'Kopenhagen Mermaid', city: 'Kopenhaga', country: 'Dania' },
  { id: 5, name: 'Tallin Sound Systems', city: 'Tallin', country: 'Estonia' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Corporate app - Angular';
  corporations = CORPORATIONS;
}
