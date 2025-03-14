import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IncluirFornecedorComponent } from './incluir-fornecedor.component';

describe('IncluirFornecedorComponent', () => {
  let component: IncluirFornecedorComponent;
  let fixture: ComponentFixture<IncluirFornecedorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IncluirFornecedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
