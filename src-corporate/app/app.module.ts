import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }               from './app.component';
import { CorporationListComponent }   from './corporation-list.component';
import { CorporationEditComponent }   from './corporation-edit.component';
import { CityListComponent }          from './city-list.component';
import { CountryListComponent }       from './country-list.component';
import { CountryAddComponent }        from './country-add.component';
import { LocationListComponent }      from './location-list.component';

import { CorporationService }   from './corporation.service';
import { CityService }          from './city.service';
import { CountryService }       from './country.service';


import { AppRoutingModule }     from './app-routing.module';

@NgModule({

  imports:      [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],

  declarations: [
    AppComponent,
    CorporationListComponent,
    CorporationEditComponent,
    CityListComponent,
    CountryListComponent,
    CountryAddComponent,
    LocationListComponent

   ],

  bootstrap: [ AppComponent ],

  providers: [ CorporationService, CityService, CountryService ],
})
export class AppModule { }
