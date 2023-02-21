import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplo1ServicosComponent } from './exemplo1-servicos.component';

describe('Exemplo1ServicosComponent', () => {
  let component: Exemplo1ServicosComponent;
  let fixture: ComponentFixture<Exemplo1ServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exemplo1ServicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exemplo1ServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
