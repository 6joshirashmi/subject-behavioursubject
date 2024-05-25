import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifierComponentBComponent } from './notifier-component-b.component';

describe('NotifierComponentBComponent', () => {
  let component: NotifierComponentBComponent;
  let fixture: ComponentFixture<NotifierComponentBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotifierComponentBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotifierComponentBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
