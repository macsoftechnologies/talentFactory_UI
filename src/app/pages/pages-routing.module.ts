import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InstitutionDashboardComponent } from './institution-dashboard/institution-dashboard.component';
import { ProfessionalDashboardComponent } from './professional-dashboard/professional-dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
// import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  // {
  //   path:'About-Us',
  //   component: AboutusComponent
  // }
  {
    path: 'Dashboard',
    component: DashboardComponent,
  },
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'institution-dashboard',
    component: InstitutionDashboardComponent,
  },
  {
    path: 'professional-dashboard',
    component: ProfessionalDashboardComponent,
  },
  {
    path: 'student-dashboard',
    component: StudentDashboardComponent,
  },
  {
    path: 'employer-dashboard',
    component: EmployerDashboardComponent,
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
