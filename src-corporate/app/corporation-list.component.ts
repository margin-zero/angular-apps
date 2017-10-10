import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Corporation } from './corporation';
import { City } from './city';
import { Country } from './country';

import { CorporationService } from './corporation.service';
import { CityService } from './city.service';
import { CountryService } from './country.service';


@Component({
  selector: 'corporation-list',
  templateUrl: './corporation-list.component.html',
  styleUrls: ['./corporation-list.component.css'],
})

export class CorporationListComponent implements OnInit {

  corporations: Corporation[];
  cities: City[];
  countries: Country[];
  selectedCorporation: Corporation;

  constructor(
    private corporationService: CorporationService,
    private cityService: CityService,
    private countryService: CountryService,
    private router: Router) { }


  ngOnInit(): void {
    this.getCountries();
    this.getCorporations();
    this.getCities();
  }

  getCorporations(): void {
    this.corporationService
    .getCorporations()
    .then(corporations => this.corporations = corporations);
  }

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


  onSelect( corporation: Corporation ){
    this.selectedCorporation = corporation;
    this.router.navigate(['./corporation-edit/'+this.selectedCorporation.id]);
  }

  getCityName(city_id) {
    return function(element) {
      return element.id == city_id;
    }
  }

  getCountryName(country_id) {
    return function(element) {
      return element.id == country_id;
    }
  }
}
