import { Injectable } from '@angular/core';
import { User } from 'src/model/User';


@Injectable({
  providedIn: 'root'
})
export class GetAllUsersService {
  
  checkUser(user: User) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  getAlluser() {

  }
}
