import { Component, Input, OnInit } from '@angular/core';
import EmployeeModel from 'src/models/EmployeeModel';
import { EmployeeService } from './../services/employee.service';
import { NotificationService } from './../services/notification.service';
import { EmployeeValidatorService } from '../services/employee-validator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employeeService: EmployeeService;
  employeeValidatorService: EmployeeValidatorService
  notificationService: NotificationService;
  router: Router;
  statuses: String[] = [];

  @Input() employeeModel: EmployeeModel = new EmployeeModel("", "", "", 0, "", null, null, null, "", "");
  @Input() submitFunction: Function = () => {alert("No submit handler detected")}

  constructor(private emps: EmployeeService, private notifs: NotificationService, private empval: EmployeeValidatorService, private rt: Router) { 
    this.employeeService = emps;
    this.notificationService = notifs;
    this.employeeValidatorService = empval;
    this.router = rt;
  }

  ngOnInit(): void {
    this.employeeService.getStatuses().subscribe( (s) => {this.statuses = s} )
  }

  onSubmit()
  {
    this.submitFunction();
  }
}
