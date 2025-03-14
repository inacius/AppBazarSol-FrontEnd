import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TabelaFormularioComponent } from './tabela-formulario.component';

describe('TabelaFormularioComponent', () => {
  let component: TabelaFormularioComponent;
  let fixture: ComponentFixture<TabelaFormularioComponent>;

  beforeEach(waitForAsync(() => {
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
