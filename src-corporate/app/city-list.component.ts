import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { City }        from './city';
import { Country }     from './country';
import { Corporation } from './corporation';

import { CityService }        from './city.service';
import { CountryService }     from './country.service';
import { CorporationService } from './corporation.service';


@Component({
  selector: 'city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css'],
})

export class CityListComponent implements OnInit {

  cities: City[];
  countries: Country[];
  corporations: Corporation[];

  constructor(
      private cityService: CityService,
      private countryService: CountryService,
      private corporationService: CorporationService,
      private router: Router
  ) { }

  getCities(): void {
    this.cityService
    .getCities()
    .then(cities => this.cities = cities);
  }

  getCountries(): void {
    this.countryService
    .getCountries()
    .then(countries => this.countries = countries);
  }

  getCorporations(): void {
    this.corporationService.getCorporations().then(corporations => this.corporations = corporations);
  }

  ngOnInit(): void {
    this.getCorporations();
    this.getCountries();
    this.getCities();
  }

  onClick( city: City ) {
    this.router.navigate(['./city-edit/' + city.id]);
  }

  getCity(city_id) {
    return function(element) {
      return element.id === city_id;
    };
  }

  getCountry(country_id) {
    return function(element) {
      return element.id === country_id;
    };
  }

  cityHasCorporations(city) {
    for (let i = 0; i < this.corporations.length; i++) {
      if (this.corporations[i].city === city) { return true; }
    }
    return false;
  }

  deleteCity(city: City): void {
    this.cityService
        .delete(city.id)
        .then(() => {
          this.cities = this.cities.filter(h => h !== city);
        });
  }
}
