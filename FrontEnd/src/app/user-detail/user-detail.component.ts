import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
  
 
export class UserDetailComponent implements OnInit {
  constructor(private userService: UserService) { }

  userDetail:any

  ngOnInit() {
    this.userService.getAllData()
      .subscribe((data: any) => {
        console.log("Gelen Data", data)
        this.userDetail=data;
      })
  }
}
