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

  constructor(
    private personService: PersonService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private personGenerator: PersonGenerator
  ) {}

  ngOnInit(): void {
    this.generatePersons();
    this.getPersons();
    if (this.route.snapshot.paramMap.get('page')) {
      this.page = parseInt(this.route.snapshot.paramMap.get('page'), 10);
    }
  }

  getPersons(): void {
    this.personService
    .getPersons()
    .then(persons => this.setPersons(persons));
  }

  setPersons(persons): void {
    this.persons = persons;
    this.filterData();
    this.totalPages = Math.ceil(this.filteredPersons.length / 10);
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
      return (
        (
        (
        element.surname + ' ' + element.name + ' ' + element.surname + ' ' + element.position + ' ' + element.department + ' ' +
        element.internal + ' ' + element.phone + ' ' + element.cellular + ' ' + element.email
        )
        .toLowerCase().indexOf(this.filter.toLowerCase().trim()) > - 1)
        );

      // return element.name.indexOf(this.filter) > -1;

  }


  sortByNames(): void {
    this.filteredPersons.sort(this.compareNames);
    this.resetPage();
  }

  sortByPosition(): void {
    this.filteredPersons.sort(this.comparePositions);
    this.resetPage();
  }

  sortByDepartment(): void {
    this.filteredPersons.sort(this.compareDepartments);
    this.resetPage();
  }

  sortByInternal(): void {
    this.filteredPersons.sort(this.compareInternals);
    this.resetPage();
  }

  sortByPhone(): void {
    this.filteredPersons.sort(this.comparePhones);
    this.resetPage();
  }

  sortByCellular(): void {
    this.filteredPersons.sort(this.compareCellulars);
    this.resetPage();
  }

  sortByEmail(): void {
    this.filteredPersons.sort(this.compareEmails);
    this.resetPage();
  }


  private resetPage() {
    this.page = 1;
    alert(this.page);
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
