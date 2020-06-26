import { Component, OnInit } from '@angular/core';
import { AdminDataService } from '../admin-data.service';

interface Patient {
  name: { type: string, required: true };
  age: number;
  address: string;
  district: string;
  recentTravelHistory: {
    country: string,
    dateOfArrival: Date
  };
  datePositive: Date;
  fromQuarantine: boolean;
  status: string;
}

@Component({
  selector: 'app-manage-patients',
  templateUrl: './manage-patients.component.html',
  styleUrls: ['./manage-patients.component.scss']
})
export class ManagePatientsComponent implements OnInit {
  patients: Patient[];

  constructor(private dataService: AdminDataService) {
    dataService.getPatients().subscribe((result: any) => {
      this.patients = result.docs;
    }, err => {
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

}
