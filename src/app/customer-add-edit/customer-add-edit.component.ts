import { Component, ViewChild, inject } from '@angular/core';
import { customer } from '../model/register.model';
import { AppService } from '../services/app.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog, MatDialogClose, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-add-edit',
  templateUrl: './customer-add-edit.component.html',
  styleUrls: ['./customer-add-edit.component.css']
})
export class CustomerAddEditComponent {
  allcustomer: customer[] = [];
  registerForm:any={};
  isFetching: boolean = false;
  @ViewChild('register') form: NgForm;
   editMode: boolean = false;
  currentCustomerId: string;
  constructor(private appService: AppService,private routes:Router,private _dialog:MatDialogRef<CustomerAddEditComponent>) {


  }
  ngOnInit(): void {
    // this.registerForm.patchValue(this.data);
    this.fetchDetails();
  }
  onCustomFetch() {
    this.fetchDetails();
  }

  GetFormData(customer: { name: string, email: string, password: string, gender: string, salary: string, contact: string, country: string }) {
    if (!this.editMode) {
      this.appService.createProduct(customer);
    this.fetchDetails();
    this.form.reset()
    alert("Registered Successfully");
     this.registerForm.push(customer);
this._dialog.close();

 }
    else {
      this.appService.updateProduct(this.currentCustomerId, customer)
      alert("Updated Successfully");
      this.editMode = false;
      this.fetchDetails();
      this.form.reset()
    }

  }

  private fetchDetails() {
    this.isFetching = true;
    this.appService.fetchProduct().subscribe((customer) => {
      this.allcustomer = customer;
      this.isFetching = false;
    })
  }
  onDeleteCustomer(id: string) {
    
  this.appService.deleteProduct(id).subscribe((res): void => {
    alert('Record deleted successfully');
    console.log('res', res);
    this.fetchDetails();

  }, (error) => {
    console.log('error', error);
  })
  }
  onDeleteAllCustomer() {
    this.appService.deleteAllProduct();
  }
  onEditCliked(id: string) {
    this.currentCustomerId = id;
    //get the product based on the id
    let currentCustomer = this.allcustomer.find((c) => { return c.id === id })
    // console.log(this.form);

    //populate the button value to update product
    this.form.setValue({
      name: currentCustomer.name,
      email: currentCustomer.email,
      country: currentCustomer.country,
      gender: currentCustomer.gender,
      passwd: '',
      salary: currentCustomer.salary,
      contact: currentCustomer.contact,
    });

    //change the button value to update product
    this.editMode = true;

  }
}
