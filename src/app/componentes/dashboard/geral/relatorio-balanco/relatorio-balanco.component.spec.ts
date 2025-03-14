import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RelatorioBalancoComponent } from './relatorio-balanco.component';

describe('RelatorioBalancoComponent', () => {
  let component: RelatorioBalancoComponent;
  let fixture: ComponentFixture<RelatorioBalancoComponent>;

  beforeEach(waitForAsync(() => {
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
