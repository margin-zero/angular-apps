import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { City }        from './city';
import { CityService } from './city.service';
import { Country } from './country';
import { CountryService } from './country.service';

@Component({
  selector: 'city-edit',
  templateUrl: './city-edit.component.html',
  styleUrls: []
})

export class CityEditComponent implements OnInit {

    city: City;
    countries: Country[];
    countryId: String = ' ';

    constructor(
        private cityService: CityService,
        private countryService: CountryService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.paramMap
        .switchMap((params: ParamMap) => this.cityService.getCity(+params.get('id')))
        .subscribe(city => this.city = city);

        this.getCountries();
    }

    save(): void {

        alert(typeof(this.city.country_id));

        this.city.name = this.city.name.trim();

        if ( !this.city.name || !this.city.country_id) { this.goBack(); return; }
        this.cityService.update(this.city)
          .then(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }

    getCountries(): void {
        this.countryService.getCountries().then(countries => this.countries = countries);
    }
}
