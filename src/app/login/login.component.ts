import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};
  loginS: boolean = true;
  login: boolean = true;
  register: boolean = false;
  
  
  constructor(public userService : UserService, public router: Router) { }

  ngOnInit() {
  }

  onLogin(){
    console.log(this.user);
    this.userService.login(this.user)
    .subscribe((res) => {
      console.log(res);
      this.userService.toHomePage(res)
      this.router.navigate(['stocks']);  
    },
      err =>{
        this.loginS  = false;
      })
      
  }
  
  onLogout() {
    this.userService.logout(this.user)
      .subscribe ( (res) => {
        console.log(res);
        this.router.navigate(['login']);
      })
  }
    onRegister(){
    console.log(this.user);
    this.userService.register(this.user)
    .subscribe(  (res) => {
      console.log(res);
      this.userService.toHomePage(res)
      this.router.navigate(['stocks']);  
    })
  }
  


}
