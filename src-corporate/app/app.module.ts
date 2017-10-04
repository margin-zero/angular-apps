import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { CorporationListComponent } from './corporation-list.component';
import { CorporationService } from './corporation.service';
import { RouterModule }   from '@angular/router';




@NgModule({
  
  imports:      [ 
  
    BrowserModule,
  
    RouterModule.forRoot([
      {
        path: 'corporation-list',
        component: CorporationListComponent
      }
    ])
  ],



  declarations: [ 
    AppComponent,
    CorporationListComponent,
   ],

  bootstrap: [ AppComponent ],
  
  providers: [ CorporationService ],
})
export class AppModule { }