import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { RegisterUsersModel } from '../model/register.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  constructor(private appService: AppService, private router: Router) {
    this.rows = appService.usersArray;

  }
ngOnInit():void{
// this.appService.canAccess();
}


  headers: any = [];
  rows: RegisterUsersModel[] = [];
  userData: any = {
    updateName: '',
    passwd: '',
    email: '',
    contact: ''
  };
  indexValue:any=''
  updateUser: boolean = false;
 
  updateUserData(index: number) {
    console.log(index);
    let  IndxValue=index
    this.indexValue=IndxValue;
    let updateValue: any = this.rows[index];
    this.userData = {...updateValue};
    console.log(this.userData)
    this.updateUser = true;

  }

}


