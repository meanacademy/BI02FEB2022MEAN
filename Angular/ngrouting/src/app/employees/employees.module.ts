import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeaddComponent } from './employeeadd/employeeadd.component';
import { EmployeeupdateComponent } from './employeeupdate/employeeupdate.component';
import { EmployeedeleteComponent } from './employeedelete/employeedelete.component';


@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeelistComponent,
    EmployeeaddComponent,
    EmployeeupdateComponent,
    EmployeedeleteComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
