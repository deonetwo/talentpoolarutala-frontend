import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  public currentCount = 0;
  cartTotal: number;
  cartTotalItems: number;
  cart: any[];

  constructor(private cartService: CartService) {}

  public incrementCounter() {
    this.currentCount++;
  }

  ngOnInit(): void {
    this.cartService.getCart().subscribe((res: any) => {
      this.cart = res.products;
      this.cartTotalItems = res.products.length;
      this.cartTotal = res.products
        .reduce((sum, current) => sum + current.price * current.quantity, 0)
        .toLocaleString('id-ID', { minimumFractionDigits: 0 });
    });
  }
}
