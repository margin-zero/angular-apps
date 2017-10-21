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

  persons: Person[];

  constructor(
    private personService: PersonService,
    private router: Router,
    private personGenerator: PersonGenerator
  ) {}

  ngOnInit(): void {
    this.getPersons();
    this.generatePersons();
  }

  getPersons(): void {
    this.personService
    .getPersons()
    .then(persons => this.persons = persons);
  }

  generatePersons(): void {
    let nazwiska = '';
    let i: number;
    let newPerson = new Person();

    for ( i = 1; i <= 10; i++ ) {
      newPerson = this.personGenerator.generatePerson();
      nazwiska = nazwiska + newPerson.name + '(' + newPerson.department + ' - ' + newPerson.position + ')';
      this.personService.create(newPerson);
    }

    this.getPersons();

    //alert(nazwiska);
  }
}
