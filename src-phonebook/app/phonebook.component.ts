import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Person } from './person';

import { PersonService } from './person.service';

import { PersonGenerator } from './person-generator';

@Component({
  selector: 'phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: []
})

export class PhonebookComponent implements OnInit {

  private persons: Person[];
  private filteredPersons: Person[];
  private filter: String = '';
  private page = 1;
  private totalPages: number;
  private paginator: number[];
  private orderBy = ' ';
  private sortOrder = 'ascending';
  private sub;

  constructor(
    private personService: PersonService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private personGenerator: PersonGenerator
  ) {}


  ngOnInit(): void {
    this.generatePersons();  // wygeneruj losowe osoby w bazie danych
    this.personService
      .getPersons()                               // pobierz osoby z bazy danych...
      .then(persons => this.setPersons(persons)); // ...a potem wywołaj setPersons

    this.sub = this.route.params.subscribe((params) => {  // subskrybujemy parametry z routera
      this.page = params['page'];
    });
  }

  setPersons(persons): void {
    this.persons = persons;   // przepisz pobrane osoby do lokalnej tablicy
    this.filterData();        // przygotuj tablicę z odfiltrowanymi osobami
    this.sortBy('name');      // posortuj wstępnie wg nazwiska
    this.totalPages = Math.ceil(this.filteredPersons.length / 10);  // oblicz ilość stron potrzebną do wyświetlenia przefiltrowanych wyników
    this.paginator = [];      // czyścimy tablicę z numerami stron
    for ( let i = 1 ; i <= this.totalPages; i++) {
      this.paginator.push(i); // wypełniamy tablicę numerami stron
    }
  }

  // funkcja wypełniająca książkę telefoniczną danymi losowych osób
  generatePersons(): void {
    let i: number;
    for ( i = 1; i <= 100; i++ ) {
      this.personService.create(this.personGenerator.generatePerson());
    }
  }

  // funkcja aktualizująca filteredPersons[] po każdej zmianie wartości pola filtra
  filterData(): void {
    this.filteredPersons = this.persons.filter(this.filterArray, this);

    const ob = this.orderBy;  // zapamiętujemy kolejność sortowania
    this.orderBy = 'x';       // ustawiamy tymczasowo kolejność na pustą, żeby wymusić sortowanie
    this.sortBy(ob); // po zaktualizowaniu filteredPersons[] wywołujemy sortowanie w/g aktualnych kryteriów

  }

  // funkcja filtrująca - definicja filtra dla funkcji persons.filter[]
  filterArray(element, index, array) {
      return (
        (
        (
        element.surname + ' ' + element.name + ' ' + element.surname + ' ' + element.position + ' ' + element.department + ' ' +
        element.internal + ' ' + element.phone + ' ' + element.cellular + ' ' + element.email
        )
        .toLowerCase().indexOf(this.filter.toLowerCase().trim()) > - 1)
        );
  }

  // funkcja sortująca przefiltrowane dane
  sortBy(orderBy: string): void {

    orderBy = orderBy.trim().toLowerCase();

    if (orderBy !== this.orderBy) {    // jeśli kryterium ma być inne niż dotychczas - ustaw kolejność na rosnącą
      this.sortOrder = 'ascending';
    } else {                           // w przeciwnym wypadku (kryterium takie same)
      this.filteredPersons.reverse();  // odwróć kolejność tablicy i zmień wartość this.sortOrder na odwrotną
      if (this.sortOrder === 'ascending') {
        this.sortOrder = 'descending';
      } else {
        this.sortOrder = 'ascending';
      }
    }

  if (orderBy !== this.orderBy) {  // jeśli zmienia się kryterium sortowania to uruchamiamy sortowanie rosnące
    switch (orderBy) {
      case 'name':
        this.filteredPersons.sort(this.compareNamesAsc);
        break;
      case 'position':
        this.filteredPersons.sort(this.comparePositionsAsc);
        break;
      case 'department':
        this.filteredPersons.sort(this.compareDepartmentsAsc);
        break;
      case 'internal':
        this.filteredPersons.sort(this.compareInternalsAsc);
        break;
      case 'phone':
        this.filteredPersons.sort(this.comparePhonesAsc);
        break;
      case 'cellular':
        this.filteredPersons.sort(this.compareCellularsAsc);
        break;
      case 'email':
        this.filteredPersons.sort(this.compareEmailsAsc);
        break;
    }
    this.orderBy = orderBy; // ostatecznie wpisujemy aktualną kolejność w this.orderBy
  }

    this.resetPage();
  }


  private resetPage() {
    this.page = 1;
    this.totalPages = Math.ceil(this.filteredPersons.length / 10);

    this.paginator = [];      // czyścimy tablicę z numerami stron
    for ( let i = 1 ; i <= this.totalPages; i++) {
      this.paginator.push(i); // wypełniamy tablicę numerami stron
    }
    this.router.navigate(['phonebook', this.page]);
  }


  // funkcje sortujące rosnąco wg określonych kryteriów / kolumn
  compareNamesAsc(person1, person2) {
    return (person1.name + ' ' + person1.surname).localeCompare(person2.name + ' ' + person2.surname);
  }
  comparePositionsAsc(person1, person2) {
    return person1.position.localeCompare(person2.position);
  }
  compareDepartmentsAsc(person1, person2) {
    return person1.department.localeCompare(person2.department);
  }
  compareInternalsAsc(person1, person2) {
    return person1.internal.localeCompare(person2.internal);
  }
  comparePhonesAsc(person1, person2) {
    return person1.phone.localeCompare(person2.phone);
  }
  compareCellularsAsc(person1, person2) {
    return person1.cellular.localeCompare(person2.cellular);
  }
  compareEmailsAsc(person1, person2) {
    return person1.email.localeCompare(person2.email);
  }


  private closeWarning(): void {
    document.getElementById('warningCard').style.display = 'none';
  }
}
