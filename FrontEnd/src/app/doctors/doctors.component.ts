import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  constructor(private doctorService:DoctorService) { }
  doctors:any
  ngOnInit(): void {
 this.doctorService.getAllData()
      .subscribe((data: any) => {
        console.log("HASTANELER", data)
        this.doctors=data;
      })

  }

}
