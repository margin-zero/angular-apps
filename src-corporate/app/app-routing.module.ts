import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CorporationListComponent }   from './corporation-list.component';
import { CityListComponent }      from './city-list.component';
import { CityAddComponent }      from './city-add.component';
import { CountryListComponent }      from './country-list.component';
import { CountryAddComponent }      from './country-add.component';
import { LocationListComponent }      from './location-list.component';
import { CorporationEditComponent }      from './corporation-edit.component';


const routes: Routes = [
    { path: '', redirectTo: '/corporation-list', pathMatch: 'full' },
    { path: 'corporation-list',  component: CorporationListComponent },
    { path: 'corporation-edit/:id', component: CorporationEditComponent },
    { path: 'location-list',  component: LocationListComponent },
    { path: 'city-list', component: CityListComponent },
    { path: 'city-add/:id', component: CityAddComponent },
    { path: 'country-list', component: CountryListComponent },
    { path: 'country-add', component: CountryAddComponent },
    { path: '**', redirectTo: 'location-list', pathMatch: 'full' },
  ];

  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}