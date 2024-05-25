import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationServiceService } from '../notification-service.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification-component-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification-component-a.component.html',
  styleUrl: './notification-component-a.component.css'
})
export class NotificationComponentAComponent implements OnInit, OnDestroy {
  notificationa?: string;
  private subscriptiona?: Subscription;

  constructor(private notificationService: NotificationServiceService) { }

  ngOnInit() {
    // Subscribe to the notifications$ Observable
    this.subscriptiona = this.notificationService.notifications$.subscribe(
      message => {
        this.notificationa = message;
      }
    );
  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks
    if (this.subscriptiona) {
      this.subscriptiona.unsubscribe();
    }
  }
}
