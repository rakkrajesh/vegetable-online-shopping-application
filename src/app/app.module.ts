import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { VegetableDetailsComponent } from './vegetable-details/vegetable-details.component';
import { VendorPortalComponent } from './vendor-portal/vendor-portal.component';
import { VendorDetailsComponent } from './vendor-portal/vendor-details/vendor-details.component';
import { UpdateVendorComponent } from './vendor-portal/vendor-details/update-vendor/update-vendor.component';
import { UpdateVegetableComponent } from './vendor-portal/update-vegetable/update-vegetable.component';
import { AddItemComponent } from './vendor-portal/update-vegetable/add-item/add-item.component';
import { UpdateTransactionComponent } from './vendor-portal/update-transaction/update-transaction.component';
import { CustomerListComponent } from './vendor-portal/customer-list/customer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    LoginComponent,
    VegetableDetailsComponent,
    VendorPortalComponent,
    VendorDetailsComponent,
    UpdateVendorComponent,
    UpdateVegetableComponent,
    AddItemComponent,
    UpdateTransactionComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
