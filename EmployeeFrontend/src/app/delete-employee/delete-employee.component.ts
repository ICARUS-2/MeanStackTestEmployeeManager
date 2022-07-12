import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import EmployeeModel from 'src/models/EmployeeModel';
import NotificationModel from 'src/models/NotificationModel';
import { EmployeeValidatorService } from '../services/employee-validator.service';
import { EmployeeService } from '../services/employee.service';
import { NotificationService } from '../services/notification.service';
import { DateFormatService } from './../services/date-format.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  employeeModel: EmployeeModel = new EmployeeModel("", "", "", 0, "", null, null, null, "Active", "")
  notificationService: NotificationService;
  employeeValidatorService: EmployeeValidatorService;
  dateFormatService: DateFormatService;
  router: Router;
  employeeId = ""

  constructor(private employeeService: EmployeeService, private notifs: NotificationService, private empval: EmployeeValidatorService, private rt: Router, private route: ActivatedRoute, private dateFmt: DateFormatService) { 
    this.notificationService = notifs;
    this.employeeValidatorService = empval;
    this.router = rt;
    this.dateFormatService = dateFmt;
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
          this.notificationService.addPendingNotification(new NotificationModel(NotificationModel.TYPES.failure, "No employee with ID "+this.employeeId+" found"))
          this.router.navigate(['/'])
        }
      })
  }

  onDeletePressed()
  {
    this.employeeService.deleteEmployee(this.employeeId).subscribe( 
      {
        next: (e) =>
        {
          this.notificationService.addPendingNotification(new NotificationModel(NotificationModel.TYPES.success, "Employee successfully deleted"))
          this.router.navigate(['/'])
        },
        error: (err) =>
        {
          this.notificationService.addPendingNotification(new NotificationModel(NotificationModel.TYPES.failure, "No employee with ID "+this.employeeId+" found"))
          this.router.navigate(['/'])
        }
      }
    )
  }
}
