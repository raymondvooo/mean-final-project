import { Component, OnInit } from '@angular/core';
import { StocksearchService } from '../stocksearch.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent {
  // lineChart
  public lineChartData:Array<any> = [];
  public lineChartLabels:Array<any> = [];
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
  
  openValue: string = '';
  closeValue: string = '';
  highValue: string = '';
  lowValue: string = '';
  volumeValue: string = '';
  stockName: string = '';

  constructor(private stock: StocksearchService) {
    this.lineChartData = this.stock.lineChartData;
    this.lineChartLabels = this.stock.lineChartLabels;
    this.openValue  = this.stock.openValue;
    this.closeValue = this.stock.closeValue;
    this.highValue = this.stock.highValue;
    this.lowValue = this.stock.lowValue;
    this.volumeValue = this.stock.volumeValue;
    this.stockName = this.stock.stockName;
  }
  
  chartStock() {
    this.lineChartData = this.stock.lineChartData;
    this.lineChartLabels = this.stock.lineChartLabels;
    this.openValue  = this.stock.openValue;
    this.closeValue = this.stock.closeValue;
    this.highValue = this.stock.highValue;
    this.lowValue = this.stock.lowValue;
    this.volumeValue = this.stock.volumeValue;
    this.stockName = this.stock.stockName;
  }
 
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  
  
}

