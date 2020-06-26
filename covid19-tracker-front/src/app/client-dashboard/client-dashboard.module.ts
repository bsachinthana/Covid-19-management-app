import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDashboardRoutingModule } from './client-dashboard-routing.module';
import { ClientDashboardComponent } from './client-dashboard.component';
import { CumulativeStatsComponent } from './cumulative-stats/cumulative-stats.component';
import { ClientStatsService } from './client-stats.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeeklySummaryListComponent } from './weekly-summary-list/weekly-summary-list.component';
import { WeeklySummaryChartComponent } from './weekly-summary-chart/weekly-summary-chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [ClientDashboardComponent, CumulativeStatsComponent, WeeklySummaryListComponent, WeeklySummaryChartComponent],
  imports: [
    CommonModule,
    ClientDashboardRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [ClientStatsService],
  exports: [CumulativeStatsComponent]
})
export class ClientDashboardModule { }
