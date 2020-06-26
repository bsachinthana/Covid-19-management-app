import { Component, OnInit } from '@angular/core';
import { ClientStatsService } from '../client-stats.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-cumulative-stats',
  templateUrl: './cumulative-stats.component.html',
  styleUrls: ['./cumulative-stats.component.scss'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate(600 )
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(600, style({opacity: 0})))
    ])
  ]
})
export class CumulativeStatsComponent implements OnInit {

  statsMap: Map<string, number>;
  statsEntries = [];

  constructor(private clientStatService: ClientStatsService) {
    this.statsMap = new Map();
    this.statsMap.set('Active', 0);
    this.statsMap.set('Recovered', 0);
    this.statsMap.set('Dead', 0);
    this.setStatsMapEntries();
    this.clientStatService.getCurrentStats().subscribe(data => {
      console.log(data);
      if (data instanceof Array) {
        data.forEach(x => {
          this.statsMap.set(x._id, x.count);
          console.log(x);
        });
        this.setStatsMapEntries();
      }
    });
  }

  ngOnInit(): void {
  }

  setStatsMapEntries() {
   this.statsEntries = Array.from(this.statsMap.entries());
   console.log(this.statsEntries);
  }
}
