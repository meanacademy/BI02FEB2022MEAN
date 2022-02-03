import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuraldircComponent } from './structuraldirc.component';

describe('StructuraldircComponent', () => {
  let component: StructuraldircComponent;
  let fixture: ComponentFixture<StructuraldircComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuraldircComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuraldircComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
