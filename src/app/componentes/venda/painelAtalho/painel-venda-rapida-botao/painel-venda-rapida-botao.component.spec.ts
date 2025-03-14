import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PainelVendaRapidaBotaoComponent } from './painel-venda-rapida-botao.component';

describe('PainelVendaRapidaBotaoComponent', () => {
  let component: PainelVendaRapidaBotaoComponent;
  let fixture: ComponentFixture<PainelVendaRapidaBotaoComponent>;

  beforeEach(waitForAsync(() => {
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
