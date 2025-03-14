import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListaCompraAtualComponent } from './lista-compra-atual.component';

describe('ListaCompraAtualComponent', () => {
  let component: ListaCompraAtualComponent;
  let fixture: ComponentFixture<ListaCompraAtualComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCompraAtualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCompraAtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
