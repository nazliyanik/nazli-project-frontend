import { Component, OnInit } from '@angular/core';
import {AppointmentService} from '../services/appointment.service';

@Component({
  selector: 'app-select-appointment',
  templateUrl: './select-appointment.component.html',
  styleUrls: ['./select-appointment.component.css']
})
export class SelectAppointmentComponent implements OnInit {

  constructor(private appointmentService: AppointmentService) { }
  hospitals: any;
  ngOnInit(): void {
    
  }

}
