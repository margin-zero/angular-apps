import 'rxjs/add/operator/switchMap';

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { CorporationService } from './corporation.service';

import { Corporation } from './corporation';




@Component({
  selector: 'corporation-edit',
  templateUrl: './corporation-edit.component.html',
  styleUrls: ['./corporation-edit.component.css'],
})

export class CorporationEditComponent implements OnInit {

  corporation: Corporation;

  constructor(  
    private corporationService: CorporationService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.corporationService.getCorporation(+params.get('id')))
      .subscribe(corporation => this.corporation = corporation);
  }
}
