import { Component, OnInit } from '@angular/core';
import { ClientStatsService } from './../client-stats.service';

interface WeeklyResults {
  _id: string;
  stats: [{
    status: string,
    count: number
  }];
}

@Component({
  selector: 'app-weekly-summary-list',
  templateUrl: './weekly-summary-list.component.html',
  styleUrls: ['./weekly-summary-list.component.scss']
})
export class WeeklySummaryListComponent implements OnInit {
   results = [];
  constructor(private dataService: ClientStatsService) {
    this.dataService.getWeeklyStats().subscribe((results: [WeeklyResults]) => {
      results.forEach(r => {
        console.log(r);
        const dataRow: any = this.getStatsTemplate(r.stats);
        dataRow.date = r._id;
        this.results.push(dataRow);
      });
    });
  }

  ngOnInit(): void {
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
    return obj;
  }
}
