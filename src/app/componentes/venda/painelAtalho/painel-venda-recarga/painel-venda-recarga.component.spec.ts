import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelVendaRecargaComponent } from './painel-venda-recarga.component';

describe('PainelVendaRecargaComponent', () => {
  let component: PainelVendaRecargaComponent;
  let fixture: ComponentFixture<PainelVendaRecargaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelVendaRecargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelVendaRecargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
