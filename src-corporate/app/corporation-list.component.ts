import { Component, OnInit } from '@angular/core';

import { Corporation } from './corporation';

import { CorporationService } from './corporation.service';


@Component({
  selector: 'corporation-list',
  templateUrl: './corporation-list.component.html',
  styleUrls: ['./corporation-list.component.css'],
})

export class CorporationListComponent implements OnInit {

  corporations: Corporation[];
  selectedCorporation: Corporation;

  constructor(private corporationService: CorporationService) { }

  getCorporations(): void {
    this.corporationService.getCorporations().then(corporations => this.corporations = corporations);
  }

  ngOnInit(): void {
    this.getCorporations();
  }

  onSelect( corporation: Corporation ){
    this.selectedCorporation = corporation;
    alert(this.selectedCorporation.name);
  }
}
