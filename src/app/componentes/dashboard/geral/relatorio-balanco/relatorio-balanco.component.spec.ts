import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioBalancoComponent } from './relatorio-balanco.component';

describe('RelatorioBalancoComponent', () => {
  let component: RelatorioBalancoComponent;
  let fixture: ComponentFixture<RelatorioBalancoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatorioBalancoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioBalancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
