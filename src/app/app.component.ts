import { Component } from '@angular/core';
import { StocksearchService } from './stocksearch.service';
import { UserService } from './user.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Stock Search';
  
  constructor(public stock: StocksearchService, public user: UserService, private router : Router) {
  }
  
  login() {
    this.router.navigate(['login']);
  }
}
