import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirCompraComponent } from './incluir-compra.component';

describe('IncluirCompraComponent', () => {
  let component: IncluirCompraComponent;
  let fixture: ComponentFixture<IncluirCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncluirCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
