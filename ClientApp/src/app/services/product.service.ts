import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(
      'https://www.mockachino.com/26665598-44a8-45/products'
    );
  }

  getProductDetail() {
    return this.http.get(
      'https://www.mockachino.com/26665598-44a8-45/products/1'
    );
  }
}
