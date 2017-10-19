import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Country }        from './country';
import { CountryService } from './country.service';

@Component({
  selector: 'country-edit',
  templateUrl: './country-edit.component.html',
  styleUrls: []
})

export class CountryEditComponent implements OnInit {

    country: Country;

    constructor(
        private countryService: CountryService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.paramMap
        .switchMap((params: ParamMap) => this.countryService.getCountry(+params.get('id')))
        .subscribe(country => this.country = country);
    }

    save(): void {
        this.country.name = this.country.name.trim();
        if ( !this.country.name ) { return; }
        this.countryService.update(this.country)
          .then(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }
}
