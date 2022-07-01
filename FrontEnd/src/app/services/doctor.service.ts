import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface Doctor {
  
    identityNumber: bigint,
    name: string,
    surname: string,
    email: string,
    password: string,
    phoneNumber: string,
    bloodType: string,
    role: string
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

 
export class DoctorService {

  constructor(private http: HttpClient) { }
  private baseURL = `http://localhost:8080/api/user/getAll` 
 //  app.use('/api/user/getAll', routes);

  getAllData(): Observable<Doctor> {
   return this.http.get<Doctor>(`${this.baseURL}`)
}
}
