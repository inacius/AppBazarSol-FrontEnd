import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelVendaRapidaComponent } from './painel-venda-rapida.component';

describe('PainelVendaRapidaComponent', () => {
  let component: PainelVendaRapidaComponent;
  let fixture: ComponentFixture<PainelVendaRapidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelVendaRapidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelVendaRapidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
