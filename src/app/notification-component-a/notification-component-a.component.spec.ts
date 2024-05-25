import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationComponentAComponent } from './notification-component-a.component';

describe('NotificationComponentAComponent', () => {
  let component: NotificationComponentAComponent;
  let fixture: ComponentFixture<NotificationComponentAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationComponentAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotificationComponentAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
