import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';



interface Appointment {
  
    userId: bigint,
    cityName: string,
    hospitalName: string,
    departmentName: string,
    doctorName: string,
    description: string,
}


interface City {
  
    cityName:string
}


imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
 ]

@Injectable({
  providedIn: 'root'
})

export class AppointmentService {

  constructor(private http: HttpClient) { }
  private baseURLMongo = `http://172.16.88.34:8090` 
  private baseURLSql = `http://localhost:8080` 


  getAllData(): Observable<Appointment> {
   return this.http.get<Appointment>(`${this.baseURLMongo}/pia/appointment/123456`)}

   deleteAppointment(value:string): Observable<string> {
   return this.http.get<string>(`${this.baseURLMongo}/pia/appointment/delete`+value)}   

  getAllHospitals(): Observable<Appointment> {
   return this.http.get<Appointment>(`${this.baseURLSql}/api/hospital/getAllHospitals`)}

  getAllCities(): Observable<City> {
   return this.http.get<City>(`${this.baseURLSql}/api/city/getAll`)}

  getCitysHospital(value:number): Observable<any> {
   return this.http.get<City>(`${this.baseURLSql}/api/cityHospital/`+value)} 

  getHospitalDepartment(value:number): Observable<any> {
   return this.http.get<City>(`${this.baseURLSql}/api/hospital/`+value)} 

   getDepartmentDoctor(value:number): Observable<any> {
   return this.http.get<any>(`${this.baseURLSql}/api/departmentDoctor/`+value)} 
}

