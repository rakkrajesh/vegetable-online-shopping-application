import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { VegetableDetailsComponent } from './vegetable-details/vegetable-details.component';

const routes: Routes = [
  {path : 'home',component:HomeComponent},
   {path:'login',component:LoginComponent},
   {path : 'contact-us',component:ContactUsComponent},
   {path : 'vegetable-details',component:VegetableDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
