import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifierComponentAComponent } from './notifier-component-a.component';

describe('NotifierComponentAComponent', () => {
  let component: NotifierComponentAComponent;
  let fixture: ComponentFixture<NotifierComponentAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotifierComponentAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotifierComponentAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
