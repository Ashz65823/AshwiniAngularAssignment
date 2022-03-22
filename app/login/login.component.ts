import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/model/User';
import { UserService } from 'src/service/User/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User=new User();
  outputmsg="";
  constructor(private User: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }
  
  //DI
  //Here we are doing DI for userService and router

  PerformLogin() {
    
  }
}
