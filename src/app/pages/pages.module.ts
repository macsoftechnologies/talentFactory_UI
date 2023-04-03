import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AboutusComponent } from './aboutus/aboutus.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../shared/header/header.component';
import { InstitutionDashboardComponent } from './institution-dashboard/institution-dashboard.component';
import { ProfessionalDashboardComponent } from './professional-dashboard/professional-dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    PagesComponent,
    HomepageComponent,
    SigninComponent,
    SignupComponent,
    AboutusComponent,
    // DashboardComponent,
    HeaderComponent,
    InstitutionDashboardComponent,
    ProfessionalDashboardComponent,
    StudentDashboardComponent,
    EmployerDashboardComponent,
    AdminDashboardComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class PagesModule {}
