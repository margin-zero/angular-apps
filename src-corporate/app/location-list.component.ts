import { Component, OnInit } from '@angular/core';

import { City } from './city';
import { Country } from './country';

import { CityService } from './city.service';
import { CountryService } from './country.service';


@Component({
  selector: 'location-list',
  templateUrl: './location-list.component.html',
  styleUrls: [],
})

export class LocationListComponent implements OnInit {

  cities: City[];
  countries: Country[];

  constructor(
      private cityService: CityService,
      private countryService: CountryService
    ) { }

  getCities(): void {
    this.cityService.getCities().then(cities => this.cities = cities);
  }

  getCountries(): void {
    this.countryService.getCountries().then(countries => this.countries = countries);
  }

  ngOnInit(): void {
    this.getCities();
    this.getCountries();
  }

  findElement(arr, propName, propValue) {
    for (var i=0; i < arr.length; i++)
      if (arr[i][propName] == propValue)
        return arr[i];
  
    // will return undefined if not found; you could return a default instead
  }
}
