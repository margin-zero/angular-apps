import { Component, OnInit } from '@angular/core';

import { City } from './city';
import { Country } from './country';
import { Corporation } from './corporation';

import { CityService } from './city.service';
import { CountryService } from './country.service';
import { CorporationService } from './corporation.service';

@Component({
  selector: 'location-list',
  templateUrl: './location-list.component.html',
  styleUrls: [],
})

export class LocationListComponent implements OnInit {

  cities: City[] = [
    { id: 0, name: 'Noname', country_id: 0}
  ];
  countries: Country[];
  corporations: Corporation[] = [
    { id: 0, name: 'Noname', city: 0, country: 0 } //  added to avoid runtime error during cityHasCorporations() and countryHasCities()
  ];

  constructor(
      private cityService: CityService,
      private countryService: CountryService,
      private corporationService: CorporationService
    ) { }

  getCities(): void {
    this.cityService.getCities().then(cities => this.cities = cities);
  }

  getCountries(): void {
    this.countryService.getCountries().then(countries => this.countries = countries);
  }

  getCorporations(): void {
    this.corporationService.getCorporations().then(corporations => this.corporations = corporations);
  }

  ngOnInit(): void {
    this.getCities();
    this.getCountries();
    this.getCorporations();
  }

  findElement(arr, propName, propValue) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][propName] === propValue) {
        return arr[i];
      }
    }
    // will return undefined if not found; you could return a default instead
  }

  countryHasCities(country_id) {
    let c = false;
    for (let i = 0; i < this.cities.length; i++) {
      if (this.cities[i].country_id === country_id) { c = true; return c; }
    }
    return c;
  }

  cityHasCorporations(city) {
    let c = false;
    for (let i = 0; i < this.corporations.length; i++) {
      if (this.corporations[i].city === city) { c = true ; return c; }
    }
    return c;
  }

  deleteCountry(country: Country): void {
    this.countryService
        .delete(country.id)
        .then(() => {
          this.countries = this.countries.filter(h => h !== country);
        });
  }

  deleteCity(city: City): void {
    this.cityService
        .delete(city.id)
        .then(() => {
          this.cities = this.cities.filter(h => h !== city);
        });
  }

}
