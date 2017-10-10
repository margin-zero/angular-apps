import { Component, OnInit } from '@angular/core';

import { Country } from './country';

import { CountryService } from './country.service';


@Component({
  selector: 'country-list',
  templateUrl: './country-list.component.html',
  styleUrls: [],
})

export class CountryListComponent implements OnInit {

  countries: Country[];

  constructor(private countryService: CountryService) { }

  getCountries(): void {
    this.countryService
    .getCountries()
    .then(countries => this.countries = countries);
}

  ngOnInit(): void {
    this.getCountries();
  }
}
