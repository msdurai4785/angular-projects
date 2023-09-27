import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateComponent } from './update/update.component';
import { ReactiveFormComponent } from './reactiveform/reactiveform.component';
import { AppService } from './services/app.service';
import { ProductService } from './services/product.service';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';

const routes: Routes = [ 
// {path:'', component: HomeComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'home', component: HomeComponent,canActivate:[ProductService]},
{path:'dashboard',component:DashboardComponent},
// {path:'dashboard1',component:Dashboard1Component},
// {path:'studentdetails',component:StudentdetailsComponent},
{path:'update',component:UpdateComponent},
{path:'reactiveform',component:ReactiveFormComponent,canActivate:[ProductService]},]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
