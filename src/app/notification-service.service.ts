import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {

  constructor() { }
 // Define a private Subject
  private notificationSubject = new Subject<string>();

   // Define an Observable stream from the Subject
   notifications$: Observable<string> = this.notificationSubject.asObservable();

   // Method to emit a new notification
    notify(message: string)
    {
     this.notificationSubject.next(message);
    }


}
