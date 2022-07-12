import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeFrontend';

  constructor(private router: Router, private notificationService: NotificationService)
  {
    router.events.pipe(filter( (event)=>event instanceof NavigationStart )).subscribe( (e) =>
    {
      //Navigation starts: Clear notifications, set pending notifications as current notifications
      notificationService.shiftPendingToCurrent();
    })
  }
}
