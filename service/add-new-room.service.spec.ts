import { TestBed } from '@angular/core/testing';

import { AddNewRoomService } from './add-new-room.service';

describe('AddNewRoomService', () => {
  let service: AddNewRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddNewRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
