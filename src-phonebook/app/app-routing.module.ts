import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhonebookComponent }  from './phonebook.component';

const routes: Routes = [
    { path: '', redirectTo: '/phonebook', pathMatch: 'full' },
    { path: 'phonebook',  component: PhonebookComponent },
    { path: 'phonebook/:page', component: PhonebookComponent },
    { path: '**', redirectTo: 'location-list', pathMatch: 'full' },
  ];

  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
