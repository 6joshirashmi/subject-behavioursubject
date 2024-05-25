import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotificationComponentComponent } from './notification-component/notification-component.component';
import { NotifierComponentComponent } from './notifier-component/notifier-component.component';
import { NotificationServiceService } from './notification-service.service';
import { NotifierComponentBComponent } from './notifier-component-b/notifier-component-b.component';
import { NotifierComponentAComponent } from './notifier-component-a/notifier-component-a.component';
import { NotificationComponentAComponent } from './notification-component-a/notification-component-a.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NotificationComponentComponent,NotificationComponentAComponent,NotifierComponentComponent,NotifierComponentBComponent,NotifierComponentAComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [NotificationServiceService],
})
export class AppComponent {
  title = 'angular-subjectbehavioursbuject';
}
