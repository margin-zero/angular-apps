import { Component, OnInit } from '@angular/core';

import { City } from './city';

import { CityService } from './city.service';


@Component({
  selector: 'city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css'],
})

export class CityListComponent implements OnInit {

  cities: City[];

  constructor(private cityService: CityService) { }

  getCities(): void {
    this.cityService.getCities().then(cities => this.cities = cities);
  }

  ngOnInit(): void {
    this.getCities();
  }
}
