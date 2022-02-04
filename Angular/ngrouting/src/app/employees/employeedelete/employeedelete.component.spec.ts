import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeedeleteComponent } from './employeedelete.component';

describe('EmployeedeleteComponent', () => {
  let component: EmployeedeleteComponent;
  let fixture: ComponentFixture<EmployeedeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeedeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeedeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
