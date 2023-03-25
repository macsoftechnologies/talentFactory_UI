import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfessionalComponent } from './professional/professional.component';
import { StudentComponent } from './student/student.component';
import { EmployerComponent } from './employer/employer.component';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PagesComponent,
    HomepageComponent,
    SigninComponent,
    SignupComponent,
    AboutusComponent,
    DashboardComponent,
    ProfessionalComponent,
    StudentComponent,
    EmployerComponent,
    AdminComponent,

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  
  ]
})
export class PagesModule { }
