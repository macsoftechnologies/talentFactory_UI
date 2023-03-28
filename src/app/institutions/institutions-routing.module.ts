import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { InstitutionsComponent } from './institutions.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  
    {
      path: '',
      component: InstitutionsComponent
    },
    {
      path: 'course',
      component: CoursesComponent
    },
    {
      path: 'staff',
      component: StaffComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstitutionsRoutingModule { }
