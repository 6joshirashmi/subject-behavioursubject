import { Component } from '@angular/core';
import { NotificationServiceService } from '../notification-service.service';

@Component({
  selector: 'app-notifier-component',
  standalone: true,
  imports: [],
  templateUrl: './notifier-component.component.html',
  styleUrl: './notifier-component.component.css'
})
export class NotifierComponentComponent {
  constructor(private notificationService: NotificationServiceService) { }

  sendNotification() {
    this.notificationService.notify('This is a test notification!');
  }
}
