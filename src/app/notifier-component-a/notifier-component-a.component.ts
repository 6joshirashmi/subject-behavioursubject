import { Component } from '@angular/core';
import { NotificationServiceService } from '../notification-service.service';

@Component({
  selector: 'app-notifier-component-a',
  standalone: true,
  imports: [],
  templateUrl: './notifier-component-a.component.html',
  styleUrl: './notifier-component-a.component.css'
})
export class NotifierComponentAComponent {
  constructor(private notificationService: NotificationServiceService) { }

  sendNotification() {
    this.notificationService.notify('This is a test notification A!');
  }
}
