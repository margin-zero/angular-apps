import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { CorporationListComponent }   from './corporation-list.component';
import { CorporationEditComponent }   from './corporation-edit.component';
import { CityListComponent }      from './city-list.component';
import { LocationListComponent }    from './location-list.component';

import { CorporationService } from './corporation.service';
import { CityService } from './city.service';
import { CountryService } from './country.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  
  imports:      [ 
  
    BrowserModule,
    AppRoutingModule
  ],

  declarations: [ 
    AppComponent,
    CorporationListComponent,
    CorporationEditComponent,
    CityListComponent,
    LocationListComponent

   ],

  bootstrap: [ AppComponent ],
  
  providers: [ CorporationService, CityService, CountryService ],
})
export class AppModule { }