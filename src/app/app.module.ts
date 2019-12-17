import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { MultiCarComponent } from './multi-car/multi-car.component';
import { SingleCarComponent } from './single-car/single-car.component';
import { TransactionTableComponent } from './transaction-table/transaction-table.component';
import { SellComponent } from './sell/sell.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    MultiCarComponent,
    SingleCarComponent,
    TransactionTableComponent,
    SellComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
