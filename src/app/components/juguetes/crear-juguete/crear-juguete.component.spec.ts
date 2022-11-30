import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearJugueteComponent } from './crear-juguete.component';

describe('CrearJugueteComponent', () => {
  let component: CrearJugueteComponent;
  let fixture: ComponentFixture<CrearJugueteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearJugueteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearJugueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
