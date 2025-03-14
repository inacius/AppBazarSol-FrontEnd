import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PainelFinalizarVendaComponent } from './painel-finalizar-venda.component';

describe('PainelFinalizarVendaComponent', () => {
  let component: PainelFinalizarVendaComponent;
  let fixture: ComponentFixture<PainelFinalizarVendaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelFinalizarVendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelFinalizarVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
