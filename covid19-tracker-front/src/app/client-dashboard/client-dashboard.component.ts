import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss']
})
export class ClientDashboardComponent implements OnInit {

  constructor(private app: AppService) {
  }
  isSLowNetwork() {
    return this.app.isSlowNetwork();
  }
  ngOnInit(): void {
  }

}
