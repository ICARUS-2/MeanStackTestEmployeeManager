import { Component, Input, OnInit, Output } from '@angular/core';
import NotificationModel from 'src/models/NotificationModel';
import { EventEmitter } from '@angular/core';
import { EmployeeService } from './../services/employee.service';
import { NotificationService } from './../services/notification.service';

@Component({
  selector: 'app-terminate-form',
  templateUrl: './terminate-form.component.html',
  styleUrls: ['./terminate-form.component.css']
})
export class TerminateFormComponent implements OnInit {

  @Input() employeeId: string = "";
  reason: string = "";

  @Output() refreshEmployeeList = new EventEmitter();

  constructor(private employeeService: EmployeeService, private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  submitButtonActive()
  {
    return this.reason.length != 0
  }

  onSubmit()
  {
    this.notificationService.clearAllNotifications();
    this.employeeService.terminateEmployee(this.employeeId, this.reason).subscribe
    ( 
      {
        next: () =>
        {
          console.log("Succeeded")
          this.notificationService.addNotification(new NotificationModel(NotificationModel.TYPES.success, "Successfully terminated employee."))

          this.refreshParentList();
        },
        error: (err) =>
        {
          console.log("Failed")
          this.notificationService.addNotification(new NotificationModel(NotificationModel.TYPES.success, "Failed to terminate employee."))
        }
      } 
    )
  }

  refreshParentList()
  {
    this.refreshEmployeeList.emit();
  }
}
