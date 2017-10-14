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

  cities: City[];
  countries: Country[];
  corporations: Corporation[];

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
    this.getCorporations();
    this.getCities();
    this.getCountries();
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
    for (let i = 0; i < this.cities.length; i++) {
      if ((1 * this.cities[i].country_id) === country_id) {  return true; }
    }
    return false;
  }

  cityHasCorporations(city) {
    for (let i = 0; i < this.corporations.length; i++) {
      if (this.corporations[i].city === city) { return true; }
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

  deleteCity(city: City): void {
    this.cityService
        .delete(city.id)
        .then(() => {
          this.cities = this.cities.filter(h => h !== city);
        });
  }
}
