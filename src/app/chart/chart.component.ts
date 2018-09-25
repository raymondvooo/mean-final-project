import { Component, OnInit } from '@angular/core';
import { StocksearchService } from '../stocksearch.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent {
  // lineChart
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', '01', '02', '03'];
  public lineChartOptions:any = {
    responsive: true 
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
  
  stockArray: Array<any> = [];
  openValue: string = '';
  closeValue: string = '';
  highValue: string = '';
  lowValue: string = '';
  volumeValue: string = '';
  stockName: string = '';

  constructor(private stock: StocksearchService) {
  }
 
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
  
  public chartStock():void {
    this.lineChartData = [];
    this.stockArray = this.stock.dayArray;
    let closingValues = {data: new Array(this.stockArray.length), label: 'Series A'};
    for (let i = 0; i < this.stockArray.length; i++) {
      closingValues.data[this.stockArray.length - 1 - i] = this.stockArray[i]['4. close'];
      this.lineChartLabels[i] = this.stock.dateArray[this.stockArray.length - 1 - i];
    }
    this.lineChartData[0] = closingValues;
    this.openValue = this.stockArray[0]['1. open'];
    this.highValue = this.stockArray[0]['2. high'];
    this.lowValue = this.stockArray[0]['3. low'];
    this.closeValue = this.stockArray[0]['4. close'];
    this.volumeValue = this.stockArray[0]['5. volume'];
    this.stockName = this.stock.equity.toUpperCase();
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  
  
}

