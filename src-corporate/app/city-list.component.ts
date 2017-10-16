import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { City } from './city';
import { Country } from './country';

import { CityService } from './city.service';
import { CountryService } from './country.service';


@Component({
  selector: 'city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css'],
})

export class CityListComponent implements OnInit {

  cities: City[];
  countries: Country[];

  constructor(
      private cityService: CityService,
      private countryService: CountryService,
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

  ngOnInit(): void {
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
}
