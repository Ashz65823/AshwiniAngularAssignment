import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAllBookingService {

  constructor() { }
  booking = [{
    "roomNo": "101",
    "charges": "500.00"
  }, {
    "roomNo": "102",
    "charges": "600.00"
  }, {
    "roomNo": "103",
    "charges": "700.00"
  }];

  getAllRoomsForBooking() {
    return this.booking;
  }
}
