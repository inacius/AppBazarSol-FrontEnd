import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelFinalizarVendaComponent } from './painel-finalizar-venda.component';

describe('PainelFinalizarVendaComponent', () => {
  let component: PainelFinalizarVendaComponent;
  let fixture: ComponentFixture<PainelFinalizarVendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelFinalizarVendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelFinalizarVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
