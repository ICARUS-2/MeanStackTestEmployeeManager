import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';
import EmployeeModel from 'src/models/EmployeeModel';
import NotificationModel from 'src/models/NotificationModel';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeValidatorService {

  constructor(private notificationService: NotificationService, private employeeService: EmployeeService) { }
  
  validate(employee: EmployeeModel): Boolean
  {
    let errorCount = 0;

    if (employee.name == "")
    {
      this.notificationService.addNotification(new NotificationModel(NotificationModel.TYPES.failure, "Name is required"))
      errorCount++;
    }

    if (employee.department == "")
    {
      this.notificationService.addNotification(new NotificationModel(NotificationModel.TYPES.failure, "Department is required"))
      errorCount++;
    }
    
    if (employee.salary == null || employee.salary < 0)
    {
      this.notificationService.addNotification(new NotificationModel(NotificationModel.TYPES.failure, "Salary must be a positive number"))
      errorCount++;
    }

    if (employee.dateOfBirth == null)
    {
      this.notificationService.addNotification(new NotificationModel(NotificationModel.TYPES.failure, "Date of birth is required"))
      errorCount++;
    }

    if (employee.hiringDate == null)
    {
      this.notificationService.addNotification(new NotificationModel(NotificationModel.TYPES.failure, "Hiring date is required"))
      errorCount++;
    }

    this.employeeService.getStatuses().subscribe( (statuses) =>
    {
      if (!statuses.includes(employee.status))
      this.notificationService.addNotification(new NotificationModel(NotificationModel.TYPES.failure, "Invalid status provided"))
      errorCount++;
    } )

    return errorCount == 0;
  }
}
