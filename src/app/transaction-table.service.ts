import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLoginService } from './user-login.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionTableService {

  url = 'http://localhost:8080/tx/';

  constructor(
    private http: HttpClient,
    private loginService: UserLoginService
    ) { }

  listPurchases(): Observable<any> {
    const api = 'user-purchases/' + this.loginService.currUser.userId;
    return this.http.get(this.url + api);
  }

  listSales(): Observable<any> {
    const api = 'user-sales/' + this.loginService.currUser.userId;
    return this.http.get(this.url + api);
  }
}
