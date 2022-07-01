import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  http: any;
  baseURL = 'http://localhost:8080/api/user/getAll';

  constructor() { }

  getAllData(): Observable<any> {
   return this.http.get(`${this.baseURL}/getAll`)
}

  ngOnInit(): void {
  }

}
