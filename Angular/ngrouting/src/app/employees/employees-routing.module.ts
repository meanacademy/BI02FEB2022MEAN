import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeaddComponent } from './employeeadd/employeeadd.component';
import { EmployeedeleteComponent } from './employeedelete/employeedelete.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeesComponent } from './employees.component';
import { EmployeeupdateComponent } from './employeeupdate/employeeupdate.component';

const routes: Routes = [
  { path: '', component: EmployeesComponent },
  { path: 'employee-list', component: EmployeelistComponent },
  { path: 'employee-add', component: EmployeeaddComponent },
  { path: 'employee-update', component: EmployeeupdateComponent },
  { path: 'employee-delete', component:EmployeedeleteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
