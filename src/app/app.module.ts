import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './home/home.module';
import { MainModule } from './main/main.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  FooterComponent,
  HeaderComponent,
  HomeModule
} from './home';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    MainModule
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
