import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/User';
import { GetAllUsersService } from 'src/service/get-all-users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: GetAllUsersService, private router: Router) {
  }

  ngOnInit(): void {
  }
  user: User = new User();
  //DI
  //Here we are doing DI for userService and router

  PerformLogin() {
    // console.log("User Name is =", this.user.userName);
    // console.log("Password is =", this.user.password)
    //to check of userName and password is correct
    //by calling service method
    let result = this.service.checkUser(this.user)

    //if result is true show message
    //i.e we want to navigate to other component
    if (result) {
      //navigate from here to other compoent becoz result is true
      //Hence we need to injuect router in our paths
      this.router.navigate(['message'])
    }
    else {
      alert("Invalid User name or Password")
      this.user.email = '';
      this.user.password = '';

    }
  }
}
