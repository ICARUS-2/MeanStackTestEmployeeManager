import { Component, OnInit } from '@angular/core';
import { NotificationService } from './../services/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notificationService: NotificationService

  constructor(notifs: NotificationService) {
    this.notificationService = notifs;
  }

  ngOnInit(): void {
  }

}
