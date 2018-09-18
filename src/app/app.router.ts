import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StocksearchComponent } from './stocksearch/stocksearch.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: StocksearchComponent },
    { path: 'register', component: RegisterComponent }

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);