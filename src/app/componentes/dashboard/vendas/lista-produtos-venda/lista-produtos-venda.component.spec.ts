import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProdutosVendaComponent } from './lista-produtos-venda.component';

describe('ListaProdutosVendaComponent', () => {
  let component: ListaProdutosVendaComponent;
  let fixture: ComponentFixture<ListaProdutosVendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaProdutosVendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProdutosVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
