import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
//import { NetworkAwarePreloadingStrategyService } from './services/network-aware-preloading-strategy.service';
import {DashboardComponent}  from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from 'src/auth/auth.guard';
import { TestComponent } from './test/test.component';
import { BasicModelComponent } from './basic-model/basic-model.component';
import { AboutComponent } from './about/about.component';
import { BrandsComponent } from './brands/brands.component';
import { ApiTestComponent } from './api-test/api-test.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


const routes: Routes = [
  //{ path: '', fallbackRoute, canActivate:[AuthGuard]},
  { path: '', redirectTo:'/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component:DashboardComponent, canActivate:[AuthGuard]},
    { path: 'basic-model', data: {preload: true, loadAfterSeconds: 20}, component: BasicModelComponent, canActivate:[AuthGuard]},
    { path: 'about', component: AboutComponent, canActivate:[AuthGuard]},
    { path: 'brands', component: BrandsComponent, canActivate:[AuthGuard]},
    { path: 'test', component: TestComponent, canActivate:[AuthGuard]},
    { path: 'base-analysis', component: ApiTestComponent, canActivate:[AuthGuard]}, 
     {path: '**', component: PageNotFoundComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    
],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})

export class AppRoutingModule { }
