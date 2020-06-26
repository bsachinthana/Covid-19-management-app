import { TestBed } from '@angular/core/testing';

import { ClientStatsService } from './client-stats.service';

describe('ClientStatsService', () => {
  let service: ClientStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
