import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitutionsRoutingModule } from './institutions-routing.module';
import { InstitutionsComponent } from './institutions.component';
import { CoursesComponent } from './courses/courses.component';
import { StaffComponent } from './staff/staff.component';


@NgModule({
  declarations: [
    InstitutionsComponent,
    CoursesComponent,
    StaffComponent,
   
  ],
  imports: [
    CommonModule,
    InstitutionsRoutingModule
  ]
})
export class InstitutionsModule { }
