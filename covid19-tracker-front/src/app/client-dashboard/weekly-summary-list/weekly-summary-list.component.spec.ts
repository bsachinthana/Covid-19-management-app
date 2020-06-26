import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklySummaryListComponent } from './weekly-summary-list.component';

describe('WeeklySummaryListComponent', () => {
  let component: WeeklySummaryListComponent;
  let fixture: ComponentFixture<WeeklySummaryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklySummaryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklySummaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
