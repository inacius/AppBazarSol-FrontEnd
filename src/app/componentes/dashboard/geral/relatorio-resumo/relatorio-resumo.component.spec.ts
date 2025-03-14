import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RelatorioResumoComponent } from './relatorio-resumo.component';

describe('RelatorioResumoComponent', () => {
  let component: RelatorioResumoComponent;
  let fixture: ComponentFixture<RelatorioResumoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatorioResumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioResumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
