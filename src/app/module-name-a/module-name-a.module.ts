import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleNameARoutingModule } from './module-name-a-routing.module';
import { ModuleNameAComponent } from './module-name-a.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { PerformanceComponent } from './performance/performance.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SprintPlanComponent } from './sprint-plan/sprint-plan.component';
import { EmployeesComponent } from './employees/employees.component';
import { StudentsComponent } from './students/students.component';


@NgModule({
  declarations: [
    ModuleNameAComponent,
    HeaderComponent,
    ProfileComponent,
    PerformanceComponent,
    AttendanceComponent,
    ChangePasswordComponent,
    SprintPlanComponent,
    EmployeesComponent,
    StudentsComponent
  ],
  imports: [
    CommonModule,
    ModuleNameARoutingModule,
  ]
})
export class ModuleNameAModule { }
