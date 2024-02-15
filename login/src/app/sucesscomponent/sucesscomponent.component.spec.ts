import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucesscomponentComponent } from './sucesscomponent.component';

describe('SucesscomponentComponent', () => {
  let component: SucesscomponentComponent;
  let fixture: ComponentFixture<SucesscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SucesscomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SucesscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
