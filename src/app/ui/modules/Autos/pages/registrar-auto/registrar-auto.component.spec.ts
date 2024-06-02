import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAutoComponent } from './registrar-auto.component';

describe('RegistrarAutoComponent', () => {
  let component: RegistrarAutoComponent;
  let fixture: ComponentFixture<RegistrarAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarAutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
