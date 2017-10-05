import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CorporationListComponent }   from './corporation-list.component';
import { CityListComponent }      from './city-list.component';
import { CorporationEditComponent }      from './corporation-edit.component';

const routes: Routes = [
    { path: '', redirectTo: '/corporation-list', pathMatch: 'full' },
    { path: 'corporation-list',  component: CorporationListComponent },
    { path: 'corporation-edit/:id', component: CorporationEditComponent },
    { path: 'city-list', component: CityListComponent },
  ];
   
  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}