import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { MonkeySearchComponent } from './monkey-search/monkey-search.component';
import { BuyerProductListComponent } from './buyer-product-list/buyer-product-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { OwnerPageComponent } from './owner-page/owner-page.component';
import { RentalPageComponent } from './rental-page/rental-page.component';
import { PostReturnPageComponent } from './post-return-page/post-return-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    MonkeySearchComponent,
    ShoppingCartComponent,
    OwnerPageComponent,
    BuyerProductListComponent,
    LoginPageComponent,
    RentalPageComponent,
    PostReturnPageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }