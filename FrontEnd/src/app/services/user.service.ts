import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface User {
  
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

 
export class UserService {

  constructor(private http: HttpClient) { }
  private baseURL = `http://172.16.88.37:8080/api/user/getAll` 
 //  app.use('/api/user/getAll', routes);

  getAllData(): Observable<User> {
   return this.http.get<User>(`${this.baseURL}`)
}
}
