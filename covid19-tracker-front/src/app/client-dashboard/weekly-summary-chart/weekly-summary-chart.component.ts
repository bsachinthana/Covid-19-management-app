import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ClientStatsService } from './../client-stats.service';

interface WeeklyResults {
  _id: string;
  stats: [{
    status: string,
    count: number
  }];
}
@Component({
  selector: 'app-weekly-summary-chart',
  templateUrl: './weekly-summary-chart.component.html',
  styleUrls: ['./weekly-summary-chart.component.scss']
})
export class WeeklySummaryChartComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [], label: '',  }
  ];

  constructor(private dataService: ClientStatsService) {
    this.dataService.getWeeklyStats().subscribe((results: [WeeklyResults]) => {
      const chartData = {
        Active: { data: [], label: 'Active', backgroundColor: '#f9c74f' },
        Recovered: { data: [], label: 'Recovered', backgroundColor: '#00a896' },
        Dead: { data: [], label: 'Dead', backgroundColor: '#f94144' }
      };

      results.forEach(element => {
        this.barChartLabels.push(element._id);
        const stats = this.getStatsTemplate(element.stats);

        chartData.Active.data.push(stats.Active);
        chartData.Recovered.data.push(stats.Recovered);
        chartData.Dead.data.push(stats.Dead);
      });
      this.barChartData = [];
      Object.keys(chartData).forEach(d => {
        this.barChartData.push(chartData[d]);
      });
      console.log(this.barChartData);
    });
  }

  ngOnInit() {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  getStatsTemplate(statsObj: Array<any>) {
    const obj = {
      Active: 0,
      Recovered: 0,
      Dead: 0
    };
    statsObj.forEach(x => {
      obj[x.status] = x.count;
    });
    console.log(obj);
    return Object.create(obj);
  }
}
