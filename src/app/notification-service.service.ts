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


/**
 * The next(message) method in the context of this.notificationSubject.next(message) is used to emit a new value to all subscribers of the Subject. In RxJS, a Subject is a special type of Observable that allows values to be multicasted to many Observers. The next() method is used to push values into the Subject.

Here’s a detailed breakdown:

Subject in RxJS:

A Subject is both an Observable and an Observer.
This means you can subscribe to a Subject to receive values, and you can also emit values into a Subject.
next() Method:

The next() method is part of the Observer interface in RxJS.
When you call next(value), it emits the value to all subscribers of the Subject.
Emitting Values:

Calling this.notificationSubject.next(message) will pass the message to all components or services that have subscribed to notificationSubject
 */