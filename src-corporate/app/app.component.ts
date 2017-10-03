import { Component, OnInit } from '@angular/core';

import { Corporation } from './corporation';

import { CorporationService } from './corporation.service';

// corporations: Corporation[];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CorporationService],
})

export class AppComponent implements OnInit {
  
  title = 'Corporate app - Angular';
  corporations: Corporation[];

  constructor(private corporationService: CorporationService) { }

  getCorporations(): void {
    this.corporations = this.corporationService.getCorporations();
  }

  ngOnInit(): void {
    this.getCorporations();
  }
}
