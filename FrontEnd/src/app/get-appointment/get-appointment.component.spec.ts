import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAppointmentComponent } from './get-appointment.component';

describe('GetAppointmentComponent', () => {
  let component: GetAppointmentComponent;
  let fixture: ComponentFixture<GetAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
