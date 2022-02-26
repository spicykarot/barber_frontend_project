import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BarberDetailComponent } from './barber-detail/barber-detail.component';
import { BarberAppointmentComponent } from './barber-appointment/barber-appointment.component';
import { NavbarComponent } from './navbar/navbar.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BarberDetailComponent,
    BarberAppointmentComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AutocompleteLibModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
