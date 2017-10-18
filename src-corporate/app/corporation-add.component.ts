import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location }                 from '@angular/common';

import { City } from './city';
import { Corporation } from './corporation';

import { CityService } from './city.service';
import { CorporationService } from './corporation.service';


@Component({
    selector: 'corporation-add',
    templateUrl: './corporation-add.component.html',
    styleUrls: [],
})

export class CorporationAddComponent implements OnInit {

    cities: City[];
    cityId: number;
    corporation: Corporation;

    constructor(
        private cityService: CityService,
        private corporationService: CorporationService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.getCities();
    }

    goBack() {
        this.location.back();
    }

    getCities(): void {
        this.cityService.getCities().then(cities => this.cities = cities);
    }

    add(name: string, ceoName: string, website: string, email: string): void {
        name = name.trim();
        ceoName = ceoName.trim();
        website = website.trim();
        email = email.trim();

        if ( !name || !this.cityId ) { this.location.back(); return; }
        this.corporationService.create(name, 1 * this.cityId, email, ceoName, website);
        this.goBack();
    }
}
