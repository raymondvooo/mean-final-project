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
  targetSymbol: string ='';
  targetInfo: string = '';
  currentClose: string = '';
  stockObj: any = {
    
  };
  name: string = "";
  favorites: Array<string> = [];
  
  constructor(private stock: StocksearchService, private user: UserService, private router: Router) { }
  
  ngOnInit() {
    this.user.getUser(this.user)
      .subscribe((data: any) => {
        this.name = data.firstName;
        console.log(this.name);
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
          console.log(this.favorites);
    });
      
  }
  getStock(stock) {
    this.stock.getData(stock)
    .subscribe ( (data:any) => {
      let dayArray: Array<any> = [];
      let dateArray: Array<any> = [];
      console.log(data);
      this.targetSymbol = data[ 'Meta Data']['2. Symbol'];
      this.targetInfo = data['Meta Data']['1. Information'];
      this.currentClose = data['Time Series (Daily)']['2018-09-12']['4. close'];
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
      this.stock.equity =  data[ 'Meta Data']['2. Symbol'];
      this.stock.chartStock();
    }
    console.log(dayArray);
    console.log(dateArray);
    } )
  }
  
  favoriteStock() {
    this.user.saveStock(this.stockObj)
    .subscribe ( (data: any) => {
      console.log("stock data: ", data)
    })
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
