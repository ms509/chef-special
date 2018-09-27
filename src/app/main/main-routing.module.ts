import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { MainAuthResolver } from './main-auth-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    resolve: {
      isAuthenticated: MainAuthResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
