import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome To onlinevegetableportal';
  subtitle ='one click solution for daily vegetables'
  navbarOpen = false;

toggleNavbar(){
  this.navbarOpen =!this.navbarOpen;
}
}

