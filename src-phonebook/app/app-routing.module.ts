import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhonebookComponent }  from './phonebook.component';

const routes: Routes = [
    { path: '', redirectTo: '/phonebook/1', pathMatch: 'full' },
    { path: 'phonebook', redirectTo: '/phonebook/1', pathMatch: 'full' },
    { path: 'phonebook/:page', component: PhonebookComponent },
    { path: '**', redirectTo: '/phonebook/1', pathMatch: 'full' },
  ];

  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
