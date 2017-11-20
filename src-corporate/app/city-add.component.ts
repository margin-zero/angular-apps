import 'rxjs/add/operator/switchMap';

import { Component, OnInit }                from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location }                         from '@angular/common';

import { City }    from './city';
import { Country } from './country';

import { CityService }    from './city.service';
import { CountryService } from './country.service';

@Component({
    selector: 'city-add',
    templateUrl: './city-add.component.html',
    styleUrls: [],
  })

export class CityAddComponent implements OnInit {

    countryId: number;
    country: Country;
    countries: Country[];

    constructor(
        private countryService: CountryService,
        private cityService: CityService,
        private router: Router,
        private route: ActivatedRoute,
        private location: Location
      ) { }

    goBack() {
      this.location.back();
    }

    add(cityName: string, countryId: number): void {
      cityName = cityName.trim();
      if ( !cityName || !countryId ) {  return; }
      this.cityService.create(cityName, 1 * countryId);
      this.goBack();
    }

    ngOnInit(): void {
      this.route.paramMap
      .switchMap((params: ParamMap) => this.countryService.getCountry(+params.get('id')))
      .subscribe(country => this.country = country);

      this.route.paramMap
      .switchMap((params: ParamMap) => this.countryService.getCountries())
      .subscribe(countries => this.countries = countries);

      this.countryId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    }
}
