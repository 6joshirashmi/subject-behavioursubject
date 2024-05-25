import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifierComponentComponent } from './notifier-component.component';

describe('NotifierComponentComponent', () => {
  let component: NotifierComponentComponent;
  let fixture: ComponentFixture<NotifierComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotifierComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotifierComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
