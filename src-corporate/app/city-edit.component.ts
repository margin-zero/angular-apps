import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { City }        from './city';
import { CityService } from './city.service';

@Component({
  selector: 'city-edit',
  templateUrl: './city-edit.component.html',
  styleUrls: []
})

export class CityEditComponent implements OnInit {

    city: City;

    constructor(
        private cityService: CityService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.paramMap
        .switchMap((params: ParamMap) => this.cityService.getCity(+params.get('id')))
        .subscribe(city => this.city = city);
    }

    save(): void {
        this.city.name = this.city.name.trim();
        if ( !this.city.name ) { this.location.back(); return; }
        this.cityService.update(this.city)
          .then(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }
}
