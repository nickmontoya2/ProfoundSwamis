import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultiCarComponent } from './multi-car/multi-car.component';
import { SingleCarComponent } from './single-car/single-car.component';


const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  }, {
    path: 'multi-car', component: MultiCarComponent, pathMatch: 'full'
  }, {
    path: 'multi-car:userId', component: MultiCarComponent, pathMatch: 'full'
  }, {
    path: 'car/:carId', component: SingleCarComponent
  }, {
    path: '', redirectTo: '/multi-car', pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
