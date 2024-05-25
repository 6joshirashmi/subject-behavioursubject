import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotificationServiceService } from '../notification-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification-component.component.html',
  styleUrl: './notification-component.component.css'
})
export class NotificationComponentComponent implements OnInit, OnDestroy {
  notification?: string;
  private subscription?: Subscription;

  constructor(private notificationService: NotificationServiceService) { }

  ngOnInit() {
    // Subscribe to the notifications$ Observable
    this.subscription = this.notificationService.notifications$.subscribe(
      message => {
        this.notification = message;
      }
    );
  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
