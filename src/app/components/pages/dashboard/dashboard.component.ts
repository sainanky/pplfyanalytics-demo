import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router : Router) { }
  dataObj : any = [];

  ngOnInit() {
    // get data from localstorage
    this.dataObj = JSON.parse(localStorage.getItem('user_details'))[0];
  }

  // logout submit function
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/homepage'])
  }
}
