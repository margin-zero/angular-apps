import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CorporationListComponent }   from './corporation-list.component';
import { CorporationEditComponent }      from './corporation-edit.component';
import { CorporationAddComponent }      from './corporation-add.component';
import { CityListComponent }      from './city-list.component';
import { CityAddComponent }      from './city-add.component';
import { CityEditComponent }      from './city-edit.component';
import { CountryListComponent }      from './country-list.component';
import { CountryAddComponent }      from './country-add.component';
import { CountryEditComponent }     from './country-edit.component';
import { LocationListComponent }      from './location-list.component';

const routes: Routes = [
    { path: '', redirectTo: '/corporation-list', pathMatch: 'full' },
    { path: 'corporation-list',  component: CorporationListComponent },
    { path: 'corporation-edit/:id', component: CorporationEditComponent },
    { path: 'corporation-add', component: CorporationAddComponent },
    { path: 'location-list',  component: LocationListComponent },
    { path: 'city-list', component: CityListComponent },
    { path: 'city-add', component: CityAddComponent },
    { path: 'city-add/:id', component: CityAddComponent },
    { path: 'city-edit/:id', component: CityEditComponent },
    { path: 'country-list', component: CountryListComponent },
    { path: 'country-add', component: CountryAddComponent },
    { path: 'country-edit/:id', component: CountryEditComponent },
    { path: '**', redirectTo: 'location-list', pathMatch: 'full' },
  ];

  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
