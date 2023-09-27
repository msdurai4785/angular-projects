import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginobj: any = {
    username: '',
    password: ''
  }
  getuserDetails: any[] = [];
  
  constructor(private appService: AppService,private router:Router) { }

  ngOnInit(): void {
    // const localData = localStorage.getItem('signupUsers');
    // console.log('data--->', localData);
    // console.log(this.getuserDetails);
    // if(localData!=null){
    //   this.getuserDetails=JSON.parse(localData);
    // }
  }
  onLogin(username:string,password:string) {
    this.appService.login(username,password);
    this.appService.menuType="login";
    // const isUserExist = this.appService.usersArray.find(m => m.username === this.loginobj.username && m.password === this.loginobj.password);
    // if (isUserExist != undefined) {
    //   // this.appService.isAuthenticated=true;
    //   this.router.navigateByUrl('/home');
    //   alert('User Login Successfully');
    //  } 
     
    //  else {
    //   alert('Wrong credentials');
    // }
    // this.loginobj= {
    //   username: '',
    //   password: ''
    // }
  }
}