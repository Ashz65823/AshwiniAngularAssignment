import { TestBed } from '@angular/core/testing';

import { AddNewBookingService } from './add-new-booking.service';

describe('AddNewBookingService', () => {
  let service: AddNewBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddNewBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
