import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { VegetableDetailsComponent } from './vegetable-details/vegetable-details.component';
import { VendorDetailsComponent } from './vendor-portal/vendor-details/vendor-details.component';


const routes: Routes = [
  {path : 'home',component:HomeComponent},
   {path:'login',component:LoginComponent},
   {path : 'contact-us',component:ContactUsComponent},
   {path : 'vegetable-details',component:VegetableDetailsComponent}
   {path: '', component: HomeComponent},
   {path: 'menu', component: HomeComponent},
   {path: 'login', component: LoginComponent},
  //  {path: 'register', component: RegisterComponent},
   {path: 'vendor/:id', component: VendorDetailsComponent},
  //  {path: 'vendor/:id/customer-list', component:CustomerListComponent},
  //  {path: 'customer/:id', component: CustomerPortalComponent},
   {path: '', component: LoginComponent},
  //  {path: 'customer/:id/details', component: CustomerDetailsComponent},
  //  {path: 'customer/:id/addmoney', component: AddMoneyComponent},
  //  {path: 'customer/:id/placeorder', component:PlaceOrderComponent},
  //  {path: 'customer/:id/transaction', component: ViewTransactionComponent},
  //  {path: 'customer/:id/details/update', component: UpdateCustomerComponent},
   {path: 'vendor/:id/details', component: VendorDetailsComponent},
  //  {path: 'vendor/:id/transaction', component: UpdateTransactionComponent},
   {path: 'vendor/:id/updatemenu', component: UpdateMenuComponent},
   {path: 'vendor/:id/updatemenu/add', component: AddItemComponent},
   {path: 'forget-password', component: ForgetPasswordComponent},
   {path: 'vendor/:id/details/update', component: UpdateVendorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
