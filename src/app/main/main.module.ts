import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { MainAuthResolver } from './main-auth-resolver.service';
import { HomeModule } from '../home/home.module';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  imports: [
    HomeModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent
  ],
  providers: [
    MainAuthResolver
  ]
})
export class MainModule {}
