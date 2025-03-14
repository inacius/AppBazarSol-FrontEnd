import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConsultaFornecedorComponent } from './consulta-fornecedor.component';

describe('ConsultaFornecedorComponent', () => {
  let component: ConsultaFornecedorComponent;
  let fixture: ComponentFixture<ConsultaFornecedorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaFornecedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
