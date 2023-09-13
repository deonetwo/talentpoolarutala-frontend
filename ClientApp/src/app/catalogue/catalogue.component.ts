import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
})
export class CatalogueComponent implements OnInit {
  products: any;

  constructor(http: HttpClient, private productService: ProductService) {
    // http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
    //   this.forecasts = result;
    // }, error => console.error(error));
  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe((res: any) => {
      this.products = res.products;
    });
  }

  addToCart(id): void {}
}
