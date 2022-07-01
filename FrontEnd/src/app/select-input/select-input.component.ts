import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import {AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-select-input, my-cmp',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.css']
})

export class SelectInputComponent implements OnInit {

  @Input() selectedHospital: string = "";
  @Input() hospitalSelected: string = "";

  constructor(private appointmentService:AppointmentService) { }
  hospitals:any;
  cities:any;
  selectedCity: any =0;
  departmentSelected: any;
  hospitalToDepartment:any;
  departmentToDoctor:any;

  selectedHospitals:any;

  selectedDepartments:any;
  selectedDepartment:any;

  selectedDoctor:any;
  ngOnInit(): void {
      this.appointmentService.getAllHospitals()
      .subscribe((data: any) => {
        console.log("HASTANELER", data)
        this.hospitals=data;
      })

      this.appointmentService.getAllCities()
      .subscribe((data: any) => {
        this.cities=data;
      })
  }

  onOptionsSelected(value:any){
     console.log("the selected value is ", value);
     this.selectedCity=value;
     this.getHospitals(this.selectedCity);
}

 onOptionsHospital(value:any){ // seçilen hastane
     console.log("HASTANE ID :", value);
     this.hospitalToDepartment=value;
     this.getDepartments(this.hospitalToDepartment);
}


onOptionsDoctor(value:any){ // seçilen hastane
     console.log("Department ID :", value);
     this.departmentToDoctor=value;
     this.getDoctors(this.departmentToDoctor);
}

getHospitals(selectedCity:number){
  this.appointmentService.getCitysHospital(this.selectedCity)
      .subscribe((data: any) => {
        console.log("Hastanenler", data)
        this.selectedHospitals=data;
      })
    }

  getDepartments(selectedDepartment:number){ // hastaneye ait departmanlar
  this.appointmentService.getHospitalDepartment(this.hospitalToDepartment)
      .subscribe((data: any) => {
        console.log("Hastane Departmanları", data)
        this.hospitalToDepartment =data;
        this.selectedDepartments=data;
      })
  }

  getDoctors(selectedDoctor:number){ // departmanlara ait doktorlar
  this.appointmentService.getDepartmentDoctor(this.departmentToDoctor)
      .subscribe((data: any) => {
        console.log("Deparman Doktorları", data)
        this.departmentToDoctor =data;
        this.selectedDoctor=data;
      })
  }
}
