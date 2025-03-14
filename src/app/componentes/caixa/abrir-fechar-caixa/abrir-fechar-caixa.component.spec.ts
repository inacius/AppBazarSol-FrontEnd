import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AbrirFecharCaixaComponent } from './abrir-fechar-caixa.component';

describe('AbrirFecharCaixaComponent', () => {
  let component: AbrirFecharCaixaComponent;
  let fixture: ComponentFixture<AbrirFecharCaixaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AbrirFecharCaixaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbrirFecharCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
