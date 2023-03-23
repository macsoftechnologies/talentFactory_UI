import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { AdminComponent } from './pages/admin/admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployerComponent } from './pages/employer/employer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { InstiutionsComponent } from './pages/instiutions/instiutions.component';
import { ProfessionalComponent } from './pages/professional/professional.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { StudentComponent } from './pages/student/student.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'About-Us',
    component: AboutusComponent
  },
  {
    path: 'Sign-In',
    component: SigninComponent
  },
  {
    path: 'Sign-Up',
    component: SignupComponent
  },
  {
    path: 'Dashboard',
    component: DashboardComponent
  },

  {
    path: 'instiutions', component:InstiutionsComponent
  },

  {
    path: 'professional', component: ProfessionalComponent
  },
  {
    path: 'student', component: StudentComponent
  },

  {
    path: 'employer', component:EmployerComponent
  },

  {
    path:'admin', component:AdminComponent
  },

  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then (m => m.PagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
