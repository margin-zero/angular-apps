import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Person } from './person';

import { PersonService } from './person.service';

@Component({
  selector: 'phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: []
})

export class PhonebookComponent implements OnInit {

  persons: Person[];

  constructor(
    private personService: PersonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons(): void {
    this.personService
    .getPersons()
    .then(persons => this.persons = persons);
  }
}
