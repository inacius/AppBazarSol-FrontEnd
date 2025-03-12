
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirProdutosComponent } from './incluir-produtos.component';

describe('IncluirProdutosComponent', () => {
  let component: IncluirProdutosComponent;
  let fixture: ComponentFixture<IncluirProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncluirProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
