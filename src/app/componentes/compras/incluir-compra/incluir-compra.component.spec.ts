import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IncluirCompraComponent } from './incluir-compra.component';

describe('IncluirCompraComponent', () => {
  let component: IncluirCompraComponent;
  let fixture: ComponentFixture<IncluirCompraComponent>;

  beforeEach(waitForAsync(() => {
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
