import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaFormularioComponent } from './tabela-formulario.component';

describe('TabelaFormularioComponent', () => {
  let component: TabelaFormularioComponent;
  let fixture: ComponentFixture<TabelaFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
