import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelAddProdutoRapidoComponent } from './painel-add-produto-rapido.component';

describe('PainelAddProdutoRapidoComponent', () => {
  let component: PainelAddProdutoRapidoComponent;
  let fixture: ComponentFixture<PainelAddProdutoRapidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelAddProdutoRapidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelAddProdutoRapidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
