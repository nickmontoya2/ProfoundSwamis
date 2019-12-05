import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultiCarComponent } from './multi-car/multi-car.component';


const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  }, {
    path: 'multi-car', component: MultiCarComponent
  }, {
    path: '', redirectTo: '/login', pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
