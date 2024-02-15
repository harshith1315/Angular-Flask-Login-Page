import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogintestcomponentComponent } from './logintestcomponent.component';

describe('LogintestcomponentComponent', () => {
  let component: LogintestcomponentComponent;
  let fixture: ComponentFixture<LogintestcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogintestcomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogintestcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
