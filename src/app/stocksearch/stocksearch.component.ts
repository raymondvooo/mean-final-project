import { Component, OnInit } from '@angular/core';
import { StocksearchService } from '../stocksearch.service';
import {UserService} from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-stocksearch',
  templateUrl: './stocksearch.component.html',
  styleUrls: ['./stocksearch.component.css']
})
export class StocksearchComponent implements OnInit {
  stockObj: any = {};
  favorites: Array<string> = [];
  
  constructor(private stock: StocksearchService, private user: UserService, private router: Router) { }
  
  ngOnInit() {
    this.user.getUser(this.user)
    .subscribe((data: any) => {
      this.user.name = data.firstName;
      console.log(this.user.name);
    });
    this.user.getFavorites()
    .subscribe ( (data: any) => {
      for (var prop in data) {
      if (data.hasOwnProperty(prop)) {
        let name = data[prop].stock;
        this.favorites.push(name);
    }
      }
      console.log("favorites: ", data)
      });
      
  }
  getStock(stock) {
    this.stock.getData(stock)
    .subscribe ( (data:any) => {
      let dayArray: Array<any> = [];
      let dateArray: Array<any> = [];
      console.log(data);
      this.stock.equity = data[ 'Meta Data']['2. Symbol'];
      console.log('DATA', data['Time Series (Daily)']);
      for (var prop in data['Time Series (Daily)']) {
      if (data['Time Series (Daily)'].hasOwnProperty(prop)) {
        let innerObj = {};
        innerObj = data['Time Series (Daily)'][prop];
        dayArray.push(innerObj);
        dateArray.push(prop);
      }
      this.stock.dayArray = dayArray;
      this.stock.dateArray = dateArray;
      this.stock.chartStock();
    }
    console.log(dayArray, "format");
    console.log(dateArray);
    } )
  }
  
  favoriteStock() {
    let existingStock: boolean = false;
    for (var i = 0; i < this.favorites.length; i++) {
      if (this.stockObj.stock === this.favorites[i]) {
        existingStock = true;
      }
    }
    if (existingStock === false) {
    this.user.saveStock(this.stockObj)
    .subscribe ( (data: any) => {
      console.log("stock data: ", data)
      this.favorites.push(data.stock)
    })
    }
    else {
      alert("Stock already in favorites!")
    }
  }
  
  getFavorites() {
    this.user.getFavorites()
    .subscribe ( (data: any) => {
      console.log("favorites: ", data)
    })
  }
  
    onLogout() {
      this.user.logout(this.user)
      .subscribe ( (res) => {
        console.log(res);
        this.router.navigate(['login']);
      })
  }


}
