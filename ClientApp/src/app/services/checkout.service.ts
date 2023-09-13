import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  constructor(private http: HttpClient) {}

  getTransactions() {
    return this.http.get(
      'https://www.mockachino.com/26665598-44a8-45/transactions'
    );
  }

  getTransactionDetail() {
    return this.http.get(
      'https://www.mockachino.com/26665598-44a8-45/transactions/1'
    );
  }
}
