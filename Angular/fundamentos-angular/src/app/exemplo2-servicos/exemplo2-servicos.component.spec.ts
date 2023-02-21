import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplo2ServicosComponent } from './exemplo2-servicos.component';

describe('Exemplo2ServicosComponent', () => {
  let component: Exemplo2ServicosComponent;
  let fixture: ComponentFixture<Exemplo2ServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exemplo2ServicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exemplo2ServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
