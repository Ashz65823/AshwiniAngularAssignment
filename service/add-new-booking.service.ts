import { Injectable } from '@angular/core';
import { Booking } from 'src/model/Booking';


@Injectable({
  providedIn: 'root'
})
export class AddNewBookingService {

  constructor() { }
  addNewBookingService(booking: Booking) {
    if (booking.user.email = "" && booking.Room.name == "")
      alert("Booking Failed")
  }
}
