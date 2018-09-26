import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StocksearchService {
  url: string = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=";
  equity: string = "";
  api: string = "&apikey=UMOI1H0PU8MIMFN6";
  dayArray: Array<any> = [];
  dateArray: Array<any> = [];
  

  lineChartData:Array<any> =  [
    {data: [], label: 'Display Data'}
  ];
  lineChartLabels:Array<any> = [];
  openValue: string = '';
  closeValue: string = '';
  highValue: string = '';
  lowValue: string = '';
  volumeValue: string = '';
  stockName: string = '';

  constructor(private http: HttpClient) { }
  
  getData (equity){
    return this.http.get(this.url+equity+this.api)
  }
  
  
    public chartStock():void {
    this.lineChartData = [];
    
    let closingValues = {data: new Array(this.dayArray.length)};
    for (let i = 0; i < this.dayArray.length; i++) {
      closingValues.data[this.dayArray.length - 1 - i] = this.dayArray[i]['4. close'];
      this.lineChartLabels[i] = this.dateArray[this.dayArray.length - 1 - i];
    }
    this.lineChartData[0] = closingValues;
    this.openValue = this.dayArray[0]['1. open'];
    this.highValue = this.dayArray[0]['2. high'];
    this.lowValue = this.dayArray[0]['3. low'];
    this.closeValue = this.dayArray[0]['4. close'];
    this.volumeValue = this.dayArray[0]['5. volume'];
    this.stockName = this.equity.toUpperCase();
    
  }


}
