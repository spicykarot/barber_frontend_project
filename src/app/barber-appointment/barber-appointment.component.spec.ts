import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarberAppointmentComponent } from './barber-appointment.component';

describe('BarberAppointmentComponent', () => {
  let component: BarberAppointmentComponent;
  let fixture: ComponentFixture<BarberAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarberAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarberAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
