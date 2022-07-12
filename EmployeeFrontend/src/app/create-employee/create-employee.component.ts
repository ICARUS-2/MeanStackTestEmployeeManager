import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../services/employee.service';
import EmployeeModel  from 'src/models/EmployeeModel';
import { NotificationService } from './../services/notification.service';
import NotificationModel from 'src/models/NotificationModel';
import { EmployeeValidatorService } from '../services/employee-validator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeModel: EmployeeModel = new EmployeeModel("", "", "", 0, "", null, null, null, "Active", "")
  notificationService: NotificationService;
  employeeValidatorService: EmployeeValidatorService;
  router: Router;

  constructor(private employeeService: EmployeeService, private notifs: NotificationService, private empval: EmployeeValidatorService, private rt: Router) { 
    this.notificationService = notifs;
    this.employeeValidatorService = empval;
    this.router = rt;
  }

  ngOnInit(): void {
  }

  onSubmitForm()
  {
    this.notificationService.clearAllNotifications();

    if (!this.employeeValidatorService.validate(this.employeeModel))
      return;

    this.employeeService.createEmployee(this.employeeModel).subscribe( (e) =>
    {
      if(e.status == 201)
      {
        this.notificationService.addPendingNotification(new NotificationModel(NotificationModel.TYPES.success, "Employee created successfully"))
        this.router.navigate(['/'])
      }
      else
      {
        this.notificationService.addNotification(new NotificationModel(NotificationModel.TYPES.failure, "Employee creation failed"))
      }
    });
  }
}
