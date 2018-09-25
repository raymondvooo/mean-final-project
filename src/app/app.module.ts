import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StocksearchComponent } from './stocksearch/stocksearch.component';
import { StocksearchService } from './stocksearch.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { routes } from './app.router';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    StocksearchComponent,
    ChartComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    routes,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [StocksearchService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
