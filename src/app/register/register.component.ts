import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  user: any = {};
  constructor(public userService : UserService, public router: Router) { }

  ngOnInit() {
  }

  onRegister(){
    console.log(this.user);
    this.userService.register(this.user)
    .subscribe(  (res) => {
      console.log(res);
      this.userService.toHomePage(res)
      this.router.navigate(['home']);  
    })
    
  }
}