import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PainelAddProdutoRapidoComponent } from './painel-add-produto-rapido.component';

describe('PainelAddProdutoRapidoComponent', () => {
  let component: PainelAddProdutoRapidoComponent;
  let fixture: ComponentFixture<PainelAddProdutoRapidoComponent>;

  beforeEach(waitForAsync(() => {
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
