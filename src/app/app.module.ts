import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { HttpClientModule } from '@angular/common/http';
import { SearchproductsComponent } from './searchproducts/searchproducts.component';
import { UserprofileComponent } from './userprofile/userprofile.component';


@NgModule({
  declarations: [AppComponent, SearchproductsComponent, UserprofileComponent, CategoriessearchComponent],
  imports: [BrowserModule,FormsModule, AppRoutingModule, BrowserAnimationsModule, SharedModule, NgxSkeletonLoaderModule,HttpClientModule, ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
