import { Component } from '@angular/core';
import { NotificationServiceService } from '../notification-service.service';

@Component({
  selector: 'app-notifier-component-b',
  standalone: true,
  imports: [],
  templateUrl: './notifier-component-b.component.html',
  styleUrl: './notifier-component-b.component.css'
})
export class NotifierComponentBComponent {
  constructor(private notificationService: NotificationServiceService) { }

  sendNotification() {
    this.notificationService.notify('This is a test notification B!');
  }
}
