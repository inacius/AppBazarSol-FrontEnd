import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConsultaProdutosComponent } from './consulta-produtos.component';

describe('ConsultaProdutosComponent', () => {
  let component: ConsultaProdutosComponent;
  let fixture: ComponentFixture<ConsultaProdutosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
