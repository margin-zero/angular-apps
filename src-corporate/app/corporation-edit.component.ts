import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { CorporationService } from './corporation.service';
import { CityService } from './city.service';

import { Corporation } from './corporation';
import { City } from './city';



@Component({
  selector: 'corporation-edit',
  templateUrl: './corporation-edit.component.html',
  styleUrls: ['./corporation-edit.component.css'],
})

export class CorporationEditComponent implements OnInit {

  cities: City[];
  corporation: Corporation;
  cityId: number;

  constructor(
    private corporationService: CorporationService,
    private cityService: CityService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.corporationService.getCorporation(+params.get('id')))
      .subscribe(corporation => this.corporation = corporation);

      this.route.paramMap
      .switchMap((params: ParamMap) => this.corporationService.getCorporation(+params.get('id')))
      .subscribe(corporation => this.cityId = corporation.city);

      this.getCities();
  }

  save(): void {
    this.corporation.name      = this.corporation.name.trim();
    this.corporation.ceo_name  = this.corporation.ceo_name.trim();
    this.corporation.website = this.corporation.website.trim();
    this.corporation.email = this.corporation.email.trim();

    this.corporation.city = 1 * this.cityId;


    if ( !this.corporation.name || !this.corporation.city) { this.goBack(); return; }
    this.corporationService.update(this.corporation)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  getCities(): void {
    this.cityService.getCities().then(cities => this.cities = cities);
  }
}
