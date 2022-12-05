import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarJuguetesComponent } from './mostrar-juguetes.component';

describe('MostrarJuguetesComponent', () => {
  let component: MostrarJuguetesComponent;
  let fixture: ComponentFixture<MostrarJuguetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarJuguetesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarJuguetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
