import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklySummaryChartComponent } from './weekly-summary-chart.component';

describe('WeeklySummaryChartComponent', () => {
  let component: WeeklySummaryChartComponent;
  let fixture: ComponentFixture<WeeklySummaryChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklySummaryChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklySummaryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
