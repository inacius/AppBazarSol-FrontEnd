import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelDetalheFinalizaCaixaComponent } from './painel-detalhe-finaliza-caixa.component';

describe('PainelDetalheFinalizaCaixaComponent', () => {
  let component: PainelDetalheFinalizaCaixaComponent;
  let fixture: ComponentFixture<PainelDetalheFinalizaCaixaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelDetalheFinalizaCaixaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelDetalheFinalizaCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
