import { TestBed } from '@angular/core/testing';

import { GetAllBookingByUserService } from './get-all-booking-by-user.service';

describe('GetAllBookingByUserService', () => {
  let service: GetAllBookingByUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllBookingByUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
