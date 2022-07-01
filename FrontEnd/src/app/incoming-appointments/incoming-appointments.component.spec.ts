import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingAppointmentsComponent } from './incoming-appointments.component';

describe('IncomingAppointmentsComponent', () => {
  let component: IncomingAppointmentsComponent;
  let fixture: ComponentFixture<IncomingAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomingAppointmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomingAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
