import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotificationComponentComponent } from './notification-component/notification-component.component';
import { NotifierComponentComponent } from './notifier-component/notifier-component.component';
import { NotificationServiceService } from './notification-service.service';
import { NotifierComponentBComponent } from './notifier-component-b/notifier-component-b.component';
import { NotifierComponentAComponent } from './notifier-component-a/notifier-component-a.component';
import { NotificationComponentAComponent } from './notification-component-a/notification-component-a.component';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,NotificationComponentComponent,NotificationComponentAComponent,NotifierComponentComponent,NotifierComponentBComponent,NotifierComponentAComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [NotificationServiceService],
})
export class AppComponent {
  title = 'angular-subjectbehavioursbuject';

myData:any=[];
myDataA:any=[];
  subject= new Subject();
 
  
  ngOnInit() {
   
  }
  EmitData(){
this.subject.next(1);
setTimeout(()=>{
  this.subject.next(2);
},3000);

setTimeout(()=>{
  this.subject.next(3);
},4000);

setTimeout(()=>{
  this.subject.next(4);
},6000);
setTimeout(()=>{
  this.subject.complete();
  this.subject.next(5);
},7000);

  }


  GetData(){
    this.subject.subscribe((data:any)=>{
      this.myData.push(data);
    });
  }

  
  GetDataA(){
    this.subject.subscribe((data:any)=>{
      this.myDataA.push(data);
    });
  }

}
