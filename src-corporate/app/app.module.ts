import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { CorporationListComponent } from './corporation-list.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    CorporationListComponent,
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }