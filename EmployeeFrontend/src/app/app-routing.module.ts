import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

const routes: Routes = [
  {path: "", component: EmployeesListComponent},
  {path: "new", component: CreateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
