import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PainelSaidaCaixaComponent } from './painel-saida-caixa.component';

describe('PainelSaidaCaixaComponent', () => {
  let component: PainelSaidaCaixaComponent;
  let fixture: ComponentFixture<PainelSaidaCaixaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelSaidaCaixaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelSaidaCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
