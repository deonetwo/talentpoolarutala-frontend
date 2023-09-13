import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CartComponent } from './cart/cart.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    CartComponent,
    CatalogueComponent,
    ProductDetailComponent,
    TransactionListComponent,
    TransactionDetailComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: CatalogueComponent, pathMatch: 'full' },
      { path: 'cart', component: CartComponent },
      { path: 'catalogue', component: CatalogueComponent },
      { path: 'detail', component: ProductDetailComponent },
      { path: 'transaction-list', component: TransactionListComponent },
      { path: 'transaction-detail', component: TransactionDetailComponent },
    ]),
  ],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
