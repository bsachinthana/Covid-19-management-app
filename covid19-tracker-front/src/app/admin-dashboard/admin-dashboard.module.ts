import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthGuard } from './helpers/auth-guard';
import { AdminDataService } from './admin-data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ManagePatientsComponent } from './manage-patients/manage-patients.component';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AdminDashboardComponent, LoginComponent, ManagePatientsComponent, AddPatientComponent],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    AuthGuard,
    AdminDataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class AdminDashboardModule { }
