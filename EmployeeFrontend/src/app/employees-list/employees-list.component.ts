import { Component, OnDestroy, OnInit } from '@angular/core';
import EmployeeModel from './../../models/EmployeeModel';
import { EmployeeService } from './../services/employee.service';
import { DateFormatService } from './../services/date-format.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit, OnDestroy {

  employees: EmployeeModel[] = [];

  dateFormatter: DateFormatService;
  employeeService: EmployeeService;

  employeeSubscription: Subscription = new Subscription();

  constructor(private empls: EmployeeService, private dateFmt: DateFormatService) { 
    this.employeeService = empls;
    this.dateFormatter = dateFmt;
  }

  ngOnInit(): void {
    this.refreshList();
  }

  ngOnDestroy(): void {
    this.employeeSubscription.unsubscribe();
  }

  handleCreateTestEmployee() : void
  {
    this.employeeService.createTestEmployee().subscribe(e =>
      {
        this.refreshList();
      });
  }

  refreshList()
  {
    this.employeeSubscription = this.employeeService.getEmployees().subscribe( entries =>
      {
        this.employees = entries.map( e => new EmployeeModel(e._id, e.name, e.email, e.salary ,e.department ,e.dateOfBirth, e.hiringDate, e.terminationDate, e.status, e.info) )
      })
  }
}
