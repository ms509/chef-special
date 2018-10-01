import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { MainAuthResolver } from './main-auth-resolver.service';
import { HomeModule } from '../home/home.module';
import { MainRoutingModule } from './main-routing.module';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    HomeModule,
    MainRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  declarations: [
    MainComponent
  ],
  providers: [
    MainAuthResolver,
    HttpClient
  ]
})
export class MainModule {}
