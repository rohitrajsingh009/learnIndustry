import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '../shared/role.guard';
import { AttendanceComponent } from './attendance/attendance.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EmployeesComponent } from './employees/employees.component';
import { HeaderComponent } from './header/header.component';
import { ModuleNameAComponent } from './module-name-a.component';
import { PerformanceComponent } from './performance/performance.component';
import { ProfileComponent } from './profile/profile.component';
import { SprintPlanComponent } from './sprint-plan/sprint-plan.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [{ path: '', component: ModuleNameAComponent },

{path:'profile',component:ProfileComponent},
{path:'head',component:HeaderComponent},
{path:'performance',component:PerformanceComponent, canActivate:[RoleGuard]},
{path:'attendance',component:AttendanceComponent,canActivate:[RoleGuard]},
{path:'change-password',component:ChangePasswordComponent},
{path:'sprint-plan',component:SprintPlanComponent}, //,canActivate:[RoleGuard]
{path:'students',component:StudentsComponent,canActivate:[RoleGuard]},
{path:'employee',component:EmployeesComponent,canActivate:[RoleGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleNameARoutingModule { }
