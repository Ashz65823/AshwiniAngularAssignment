import { TestBed } from '@angular/core/testing';

import { GetAllRoomsService } from './get-all-rooms.service';

describe('GetAllRoomsService', () => {
  let service: GetAllRoomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllRoomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
