import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { CorporationListComponent }   from './corporation-list.component';
import { CityListComponent }      from './city-list.component';

import { CorporationService } from './corporation.service';
import { CityService } from './city.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  
  imports:      [ 
  
    BrowserModule,
    AppRoutingModule
  ],

  declarations: [ 
    AppComponent,
    CorporationListComponent,
    CityListComponent
   ],

  bootstrap: [ AppComponent ],
  
  providers: [ CorporationService, CityService ],
})
export class AppModule { }