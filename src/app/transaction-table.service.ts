import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionTableService {

  url = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    const api = 'tx/user/1';
    return this.http.get(this.url + api);
  }
}
