import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CorporationListComponent }   from './corporation-list.component';
import { CityListComponent }      from './city-list.component';
import { CountryListComponent }      from './country-list.component';
import { LocationListComponent }      from './location-list.component';
import { CorporationEditComponent }      from './corporation-edit.component';


const routes: Routes = [
    { path: '', redirectTo: '/corporation-list', pathMatch: 'full' },
    { path: 'corporation-list',  component: CorporationListComponent },
    { path: 'corporation-edit/:id', component: CorporationEditComponent },
    { path: 'location-list',  component: LocationListComponent },
    { path: 'city-list', component: CityListComponent },
    { path: 'country-list', component: CountryListComponent },
  ];
   
  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}