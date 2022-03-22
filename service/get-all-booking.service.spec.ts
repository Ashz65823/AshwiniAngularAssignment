import { TestBed } from '@angular/core/testing';

import { GetAllBookingService } from './get-all-booking.service';

describe('GetAllBookingService', () => {
  let service: GetAllBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
