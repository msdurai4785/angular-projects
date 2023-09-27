import { STRING_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../services/app.service';
import { RegisterUsersModel } from '../model/register.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = ''
  signupUsers: any[] = [];
  userName = ''
loading=false;
dropDown="India"
  signupobj: any = {
    name: '',
    email: '',
    password: '',
    gender: '',
    salary: '',
    contact: '',
    country: ''

  }
  constructor(private appService: AppService, private router: Router,private http:HttpClient) { }
  errorMessage: any = {
    nameMsg: '',
    emailMsg: '',
    passwordMsg: '',
    contactMsg: ''
  }
  showError: boolean = false;

  home() {
    this.router.navigateByUrl('/home');
  }


  onsignup(registeForm: NgForm) {
   this.loading=true;
    if (this.signupobj.name !== '' && this.signupobj.passwd !== '' && this.signupobj.email !== '' && this.signupobj.contact !== '') {
      this.showError = false;
      let usersObj: RegisterUsersModel = {
        username: registeForm.controls['name'].value,
        password: registeForm.controls['passwd'].value,
        contact: registeForm.controls['contact'].value,
        email: registeForm.controls['email'].value,
        gender: registeForm.controls['gender'].value,
        salary: registeForm.controls['salary'].value,
        country: registeForm.controls['country'].value
      }


      this.appService.usersArray.push(usersObj);
      console.log('register usersArray-->', this.appService.usersArray);

   
    }
    else {
      this.showError = true;

    }
    alert("Submitted Successfully!")
    registeForm.resetForm();
    this.appService.menuType="register";
    this.router.navigateByUrl('/login');
  }
  GetFormData(data: any) {

  }

}
