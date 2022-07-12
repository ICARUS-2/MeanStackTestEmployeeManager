import { Injectable } from '@angular/core';
import NotificationModel from './../../models/NotificationModel';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  pendingNotifications: NotificationModel[] = [];
  notifications: NotificationModel[] = [];

  constructor() { 
    this.pendingNotifications = []
    this.notifications = [];
  }

  addPendingNotification(notif: NotificationModel)
  {
    this.pendingNotifications.push(notif)
  }

  addNotification(notif: NotificationModel)
  {
    this.notifications.push(notif)
  }

  clearAllNotifications()
  {
    this.pendingNotifications = [];
    this.notifications = [];
  }

  shiftPendingToCurrent()
  {
    this.notifications = this.pendingNotifications;
    this.pendingNotifications = []
  }
}
