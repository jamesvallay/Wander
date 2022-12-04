import { TestBed } from '@angular/core/testing';

import { ChangeLocationsService } from './change-locations.service';

describe('ChangeLocationsService', () => {
  let service: ChangeLocationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeLocationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
