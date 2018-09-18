import { Component, OnInit } from '@angular/core';
import { StocksearchService } from '../stocksearch.service';

@Component({
  selector: 'app-stocksearch',
  templateUrl: './stocksearch.component.html',
  styleUrls: ['./stocksearch.component.css']
})
export class StocksearchComponent implements OnInit {
  equity: string = "";
  targetSymbol: string ='';
  targetInfo: string = '';
  currentClose: string = '';

  constructor(private stock: StocksearchService) { }

  ngOnInit() {

  }
  getStock() {
    this.stock.getData(this.equity)
    .subscribe ( (data:any) => {
      let dayArray: Array<any> = [];
      let dateArray: Array<any> = [];
      console.log(data);
      console.log(this.equity);
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
      this.stock.equity = this.equity;
    }
    console.log(dayArray);
    console.log(dateArray);
    } )
  }
  
  


}
