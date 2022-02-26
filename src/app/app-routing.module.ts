import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarberAppointmentComponent } from './barber-appointment/barber-appointment.component';
import { BarberDetailComponent } from './barber-detail/barber-detail.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomePageComponent } from './home-page/home-page.component';

import { GuardtokenService } from './services/guardtoken.service';

const routes: Routes = [
  { path: 'home', component: HomePageComponent,canActivate:[GuardtokenService] }, 
  { path: 'barbershop', component: BarberDetailComponent,canActivate:[GuardtokenService]},
  { path: 'appointment', component: BarberAppointmentComponent,canActivate:[GuardtokenService]},
  { path: 'login', component: LoginComponent},
  {
    path:'registration',
    component:RegistrationComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
