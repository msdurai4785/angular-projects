import { Injectable } from '@angular/core';
import { RegisterUsersModel, updateNewArray } from '../model/register.model';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { customer } from '../model/register.model';
import { Router, RouterStateSnapshot, UrlTree } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AppService {

   loginobj: any ={};
   loggedIn:boolean=false;
   menuType:string="default";
  constructor(private http: HttpClient,private router:Router) {

  }
  createProduct(customer: { name: string, email: string, password: string, gender: string, salary: string, contact: string, country: string }) {
    const headers = new HttpHeaders({ 'myHeader': 'customer' })
    this.http.post<{ name: string }>('https://angularproject1-4f2e7-default-rtdb.firebaseio.com/details.json',
      customer, { headers: headers })
      .subscribe((res) => {
        this.fetchProduct();
      })

  }
  login(username:string,password:string){
    const isUserExist = this.usersArray.find(m => m.username === username && m.password === password);
    if (isUserExist != undefined) {
      this.loggedIn=true;
      // this.appService.isAuthenticated=true;
      this.router.navigateByUrl('/home');
      alert('User Login Successfully');
     } 
     
     else {
      alert('Wrong credentials');
      this.loginobj= {
        username: '',
        password: ''
      }
    }
    this.loginobj= {
      username: '',
      password: ''
    }
  }
  storeToken(token:string){
sessionStorage.setItem('token',token);
  }
  fetchProduct() {

    return this.http.get<{ [key: string]: customer }>('https://angularproject1-4f2e7-default-rtdb.firebaseio.com/details.json')
      .pipe(map((res) => {
        const customerinfo = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            customerinfo.push({ ...res[key], id: key })
          }
        }

        return customerinfo;
      }))

  }
  deleteProduct(id: string) {
   return this.http.delete('https://angularproject1-4f2e7-default-rtdb.firebaseio.com/details/' + id + '.json');
      
  }
  deleteAllProduct() {
    this.http.delete('https://angularproject1-4f2e7-default-rtdb.firebaseio.com/details.json')
      .subscribe();
    this.fetchProduct();
  }
  updateProduct(id: string, value: customer) {
    this.http.put('https://angularproject1-4f2e7-default-rtdb.firebaseio.com/details/' + id + '.json', value)
      .subscribe();
    this.fetchProduct();
  }
  //created an array to store register user values
  //registerusersmodel is the interface to specify the type of variables
  usersArray: RegisterUsersModel[] = [
  ];

  updateService: updateNewArray[] = [{
    updateName: '',
    updateEmail: '',
    updateSalary: '',
    updateContact: ''

  }]

  intializeRegisterModel(): RegisterUsersModel {
    return {
      username: '',
      contact: '',
      email: '',
      salary: 123,
      password: '',
      gender: '',
      country: ''
    }
  }
isAuthenticated(){
  return this.loggedIn}

}
