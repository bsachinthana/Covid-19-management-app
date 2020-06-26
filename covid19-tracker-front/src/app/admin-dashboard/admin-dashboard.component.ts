import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  sidebarToggled = true;
  constructor() { }

  ngOnInit(): void {
  }
  toggleSideBar() {
    this.sidebarToggled = !this.sidebarToggled;
    console.log(this.sidebarToggled);
  }
}
