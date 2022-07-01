import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  constructor(private appointmentService:AppointmentService) { }
  role:string = "doctor"
  appointmentDetail:any
  ngOnInit(): void {
       this.appointmentService.getAllData()
      .subscribe((data: any) => {
        this.appointmentDetail=data;
      })
  }

  delete(value : string){
        this.appointmentService.deleteAppointment(value)
      .subscribe((data: any) => {
        console.log("SİL", data)
      })
  }
}
