import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConsultaCompraComponent } from './consulta-compra.component';

describe('ConsultaCompraComponent', () => {
  let component: ConsultaCompraComponent;
  let fixture: ComponentFixture<ConsultaCompraComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
