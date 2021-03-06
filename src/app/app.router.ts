import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StocksearchComponent } from './stocksearch/stocksearch.component';
import { LoginComponent } from './login/login.component';


export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'stocks', component: StocksearchComponent },
    { path: 'login', component: LoginComponent }

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);