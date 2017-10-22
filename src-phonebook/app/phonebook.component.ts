import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  filteredPersons: Person[];

  filter: String = '';


  constructor(
    private personService: PersonService,
    private router: Router,
    private personGenerator: PersonGenerator
  ) {}

  ngOnInit(): void {
    this.generatePersons();
    this.getPersons();
  }

  getPersons(): void {
    this.personService
    .getPersons()
    .then(persons => this.setPersons(persons));
  }

  setPersons(persons): void {
    this.persons = persons;
    this.filterData();
  }

  generatePersons(): void {
    let i: number;

    for ( i = 1; i <= 100; i++ ) {
      this.personService.create(this.personGenerator.generatePerson());
    }
  }

  filterData(): void {
    this.filteredPersons = this.persons.filter(this.filterArray, this);
  }


  filterArray(element, index, array) {
      return ((
        element.surname + ' ' + element.name + ' ' + element.surname + ' ' + element.position + ' ' + element.department + ' ' +
        element.internal + ' ' + element.phone + ' ' + element.cellular + ' ' + element.email
        )
        .toLowerCase().indexOf(this.filter.toLowerCase().trim()) > - 1);

      // return element.name.indexOf(this.filter) > -1;

  }


  sortByNames(): void {
    this.filteredPersons.sort(this.compareNames);
  }

  sortByPosition(): void {
    this.filteredPersons.sort(this.comparePositions);
  }

  sortByDepartment(): void {
    this.filteredPersons.sort(this.compareDepartments);
  }

  sortByInternal(): void {
    this.filteredPersons.sort(this.compareInternals);
  }

  sortByPhone(): void {
    this.filteredPersons.sort(this.comparePhones);
  }

  sortByCellular(): void {
    this.filteredPersons.sort(this.compareCellulars);
  }

  sortByEmail(): void {
    this.filteredPersons.sort(this.compareEmails);
  }

  compareNames(person1, person2) {
    if ((person1.name + ' ' + person1.surname) < (person2.name + ' ' + person2.surname)) { return -1; }
    if ((person1.name + ' ' + person1.surname) > (person2.name + ' ' + person2.surname)) { return  1; }
    return 0;
  }

  comparePositions(person1, person2) {
    if ((person1.position) < (person2.position)) { return -1; }
    if ((person1.position) > (person2.position)) { return  1; }
    return 0;
  }

  compareDepartments(person1, person2) {
    if ((person1.department) < (person2.department)) { return -1; }
    if ((person1.department) > (person2.department)) { return  1; }
    return 0;
  }

  compareInternals(person1, person2) {
    if ((person1.internal) < (person2.internal)) { return -1; }
    if ((person1.internal) > (person2.internal)) { return  1; }
    return 0;
  }

  comparePhones(person1, person2) {
    if ((person1.phone) < (person2.phone)) { return -1; }
    if ((person1.phone) > (person2.phone)) { return  1; }
    return 0;
  }

  compareCellulars(person1, person2) {
    if ((person1.cellular) < (person2.cellular)) { return -1; }
    if ((person1.cellular) > (person2.cellular)) { return  1; }
    return 0;
  }

  compareEmails(person1, person2) {
    if ((person1.email) < (person2.email)) { return -1; }
    if ((person1.email) > (person2.email)) { return  1; }
    return 0;
  }

}
