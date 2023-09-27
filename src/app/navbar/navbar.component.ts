import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

 menuType=this.appService.menuType;
 routerLink='';
  constructor(private router: Router,public appService:AppService){
  //  let auth = this.appService.loggedIn;

  }
signin(){
  this.router.navigate(['login']);
}
signup(){
  this.router.navigateByUrl('/register')
}
cutomerLogin(){
  alert("Please Login to access Costomer Details!");
  this.router.navigateByUrl('/login')
}
customerLogout(){
  this.appService.menuType="reactive";
  this.router.navigateByUrl('/login')

  alert("Logout Successfully!")
}
}
