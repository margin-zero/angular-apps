import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductCatalogComponent }  from './product-catalog.component';

const routes: Routes = [
    { path: '', redirectTo: '/catalog', pathMatch: 'full' },
    { path: 'catalog', component: ProductCatalogComponent },
    { path: '**', redirectTo: '/catalog', pathMatch: 'full' },
  ];

  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
