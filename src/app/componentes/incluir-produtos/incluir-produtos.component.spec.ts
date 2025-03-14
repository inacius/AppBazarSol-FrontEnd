
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IncluirProdutosComponent } from './incluir-produtos.component';

describe('IncluirProdutosComponent', () => {
  let component: IncluirProdutosComponent;
  let fixture: ComponentFixture<IncluirProdutosComponent>;

  beforeEach(waitForAsync(() => {
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
