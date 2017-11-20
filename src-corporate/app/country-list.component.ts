import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Country } from './country';
import { City }    from './city';

import { CountryService } from './country.service';
import { CityService }    from './city.service';


@Component({
  selector: 'country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})

export class CountryListComponent implements OnInit {

  countries: Country[];
  cities: City[];

  constructor(
      private countryService: CountryService,
      private cityService: CityService,
      private router: Router
  ) { }

  getCountries(): void {
    this.countryService
    .getCountries()
    .then(countries => this.countries = countries);
  }

  getCities(): void {
    this.cityService
    .getCities()
    .then(cities => this.cities = cities);
  }

  ngOnInit(): void {
    this.getCities();
    this.getCountries();
  }

  onClick( country: Country ) {
    this.router.navigate(['./country-edit/' + country.id]);
  }

  countryHasCities(country_id) {
    for (let i = 0; i < this.cities.length; i++) {
      if ((1 * this.cities[i].country_id) === country_id) {  return true; }
    }
    return false;
  }

  deleteCountry(country: Country): void {
    this.countryService
        .delete(country.id)
        .then(() => {
          this.countries = this.countries.filter(h => h !== country);
        });
  }
}
