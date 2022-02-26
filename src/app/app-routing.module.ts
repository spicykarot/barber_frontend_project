import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarberAppointmentComponent } from './barber-appointment/barber-appointment.component';
import { BarberDetailComponent } from './barber-detail/barber-detail.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent }, 
  { path: 'barbershop', component: BarberDetailComponent},
  { path: 'appointment', component: BarberAppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
