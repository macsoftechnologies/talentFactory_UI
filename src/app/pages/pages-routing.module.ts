import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
// import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  // {
  //   path:'About-Us',
  //   component: AboutusComponent
  // }
  {
    path: 'Dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    component: HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
