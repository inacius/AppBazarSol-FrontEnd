import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelVendaRapidaBotaoComponent } from './painel-venda-rapida-botao.component';

describe('PainelVendaRapidaBotaoComponent', () => {
  let component: PainelVendaRapidaBotaoComponent;
  let fixture: ComponentFixture<PainelVendaRapidaBotaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelVendaRapidaBotaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelVendaRapidaBotaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
