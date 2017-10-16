import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Country } from './country';

import { CountryService } from './country.service';


@Component({
  selector: 'country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})

export class CountryListComponent implements OnInit {

  countries: Country[];

  constructor(
      private countryService: CountryService,
      private router: Router
  ) { }

  getCountries(): void {
    this.countryService
    .getCountries()
    .then(countries => this.countries = countries);
}

  ngOnInit(): void {
    this.getCountries();
  }

  onClick( country: Country ) {
    this.router.navigate(['./country-edit/' + country.id]);
  }

}
