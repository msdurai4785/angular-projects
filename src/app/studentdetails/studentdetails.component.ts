import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent {

  menuType=this.appService.menuType;
  constructor(private router: Router,public appService:AppService){
   let auth = this.appService.loggedIn;

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
