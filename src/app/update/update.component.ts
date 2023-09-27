import { AfterViewInit, Component,Input,OnChanges,OnInit, SimpleChanges} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from '../services/app.service';
import { RegisterUsersModel, updateNewArray } from '../model/register.model'
import { FormsModule } from '@angular/forms';
import { findIndex } from 'rxjs';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit, OnChanges,AfterViewInit{
  @Input() updateNew: RegisterUsersModel= { username : '',
  contact: '',
  email: '',
  salary: 123,
  password:'',
  gender:'',
  country:''};
@Input() indexVal:any=''
    
    ngOnChanges(changes:SimpleChanges){
console.log('OnChanges', this.updateNew);
console.log(JSON.stringify(changes));
    }

    ngOnInit(){
      console.log("Update component-->",this.updateNew);
    }

    ngAfterViewInit(): void {
      console.log('afterviewInit', this.updateNew);

    }
  
constructor(private appService:AppService,private router:Router){
}
updateData(register:NgForm){

  let usersObj: RegisterUsersModel = {
    username : register.controls['name'].value,
    contact : register.controls['contact'].value,
    email : this.updateNew.email,
    gender : this.updateNew.gender,
    salary : register.controls['salary'].value,
    country : this.updateNew.country
  }
  register.resetForm();
  this.router.navigateByUrl('/dashboard');

let i=this.indexVal;
console.log("i---->",i)
this.appService.usersArray.splice(i,1,usersObj)
console.log('register usersArray-->', this.appService.usersArray);
}
}

