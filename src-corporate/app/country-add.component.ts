import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location }                 from '@angular/common';


import { Country } from './country';

import { CountryService } from './country.service';

@Component({
    selector: 'country-add',
    templateUrl: './country-add.component.html',
    styleUrls: [],
  })

export class CountryAddComponent {

    constructor(
        private countryService: CountryService,
        private router: Router,
        private location: Location
      ) { }

    goBack() {
      this.location.back();
    }

    add (countryName: string): void {
      countryName = countryName.trim();
      if (!countryName) { this.location.back(); return; }
      this.countryService.create(countryName);
      this.location.back();
    }
}

