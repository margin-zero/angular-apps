import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductCatalogComponent }  from './product-catalog.component';
import { ProductPreviewComponent }  from './product-preview.component';
import { ShoppingcartComponent }    from './shoppingcart.component';

const routes: Routes = [
    { path: '', redirectTo: '/catalog', pathMatch: 'full' },
    { path: 'catalog', component: ProductCatalogComponent },
    { path: 'product/:id', component: ProductPreviewComponent },
    { path: 'product/:id/:cartId', component: ProductPreviewComponent },
    { path: 'shoppingcart', component: ShoppingcartComponent },
    { path: '**', redirectTo: '/catalog', pathMatch: 'full' },
  ];

  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
