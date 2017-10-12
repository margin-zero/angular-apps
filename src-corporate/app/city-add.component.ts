import 'rxjs/add/operator/switchMap';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location }                 from '@angular/common';


import { City } from './city';
import { Country } from './country';

import { CityService } from './city.service';
import { CountryService } from './country.service';

@Component({
    selector: 'city-add',
    templateUrl: './city-add.component.html',
    styleUrls: [],
  })

export class CityAddComponent implements OnInit, OnDestroy {

    countryId: number;
    country: Country;

    private sub: any;

    constructor(
        private cityService: CityService,
        private countryService: CountryService,
        private router: Router,
        private route: ActivatedRoute,
        private location: Location
      ) { }

    goBack() {
      this.location.back();
    }

    add (cityName: string, countryId: number): void {
      cityName = cityName.trim();
      if ( !cityName || !countryId ) { this.location.back(); return; }
      this.cityService.create(cityName, countryId);
      this.location.back();
    }

    ngOnInit(): void {
      this.sub = this.route.params.subscribe(params => {
        this.countryId = + params['id'];
     });

     this.countryService
     .getCountry(this.countryId)
     .then(country => this.country = country);
    }

    ngOnDestroy() {
      this.sub.unsubscribe();
    }

}

