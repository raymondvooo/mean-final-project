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

  constructor(private http: HttpClient) { }
  
  getData (equity){
    return this.http.get(this.url+equity+this.api)
  }
  


}
