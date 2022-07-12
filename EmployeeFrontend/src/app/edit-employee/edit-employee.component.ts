import { Component, OnInit } from '@angular/core';
import EmployeeModel from 'src/models/EmployeeModel';
import { NotificationService } from '../services/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeValidatorService } from '../services/employee-validator.service';
import { EmployeeService } from '../services/employee.service';
import NotificationModel from 'src/models/NotificationModel';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employeeModel: EmployeeModel = new EmployeeModel("", "", "", 0, "", null, null, null, "Active", "")
  notificationService: NotificationService;
  employeeValidatorService: EmployeeValidatorService;
  router: Router;
  employeeId = ""

  constructor(private employeeService: EmployeeService, private notifs: NotificationService, private empval: EmployeeValidatorService, private rt: Router, private route: ActivatedRoute) { 
    this.notificationService = notifs;
    this.employeeValidatorService = empval;
    this.router = rt;
  }

  ngOnInit(): void {
    this.route.params.subscribe( (p) =>
    {
      this.employeeId = p["id"]
    })


    this.employeeService.getEmployeeById(this.employeeId).subscribe( 
      {
        next: (e)=>
        {
          this.employeeModel = e;
        },
        error: (err) =>
        {
          console.log(err)
          this.notificationService.addPendingNotification(new NotificationModel(NotificationModel.TYPES.warning, "No employee with ID "+this.employeeId+" found"))
          this.router.navigate(['/'])
        }
      })
  }

  onSubmitForm()
  {
    this.notificationService.clearAllNotifications();

    if (!this.employeeValidatorService.validate(this.employeeModel))
      return;

    this.employeeService.editEmployee(this.employeeModel).subscribe( (e) =>
    {
      if(e.status == 200)
      {
        this.notificationService.addPendingNotification(new NotificationModel(NotificationModel.TYPES.success, "Employee edited successfully"))
        this.router.navigate(['/'])
      }
      else
      {
        this.notificationService.addNotification(new NotificationModel(NotificationModel.TYPES.failure, "Employee editing failed"))
      }
    });
  }

}
