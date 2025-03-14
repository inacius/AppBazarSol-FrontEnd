import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AtualizarOperadoraComponent } from './atualizar-operadora.component';

describe('AtualizarOperadoraComponent', () => {
  let component: AtualizarOperadoraComponent;
  let fixture: ComponentFixture<AtualizarOperadoraComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizarOperadoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarOperadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
