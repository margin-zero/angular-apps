import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }       from './app.component';
import { ProductCatalogComponent } from './product-catalog.component';
import { ProductPreviewComponent } from './product-preview.component';
import { ShoppingcartComponent } from './shoppingcart.component';


// import { PhonebookComponent } from './phonebook.component';

import { ProductService }      from './product.service';
import { ShoppingcartService } from './shoppingcart.service';

// import { PersonGenerator }    from './person-generator';

import { AppRoutingModule }   from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductCatalogComponent,
    ProductPreviewComponent,
    ShoppingcartComponent
   // PhonebookComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    FormsModule
  ],
  providers: [ ProductService, ShoppingcartService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
