import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { HttpClientModule } from '@angular/common/http';
import { NgxStripeModule } from 'ngx-stripe';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [AppComponent, CheckoutComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, BrowserAnimationsModule,
    SharedModule, NgxSkeletonLoaderModule, HttpClientModule, NgxStripeModule.forRoot('pk_test_51JvjCmGOX9BCmugbUPKFh9gXna7pl5S2SRmoprpiTwrAEBzvHnJJ7bTF5EnZ50rJRDzQ81I0idb0RHCnUQm7xA3s00a4rzdaxl')],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
