import { Injectable } from '@angular/core';
import { User } from 'src/model/User';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor() { }
  checkUser(user: User): boolean {
    if (user.email === "ash@zensar.com" && user.password === "Zensar123") {
      return true;
    }
    return false;
  }
}
