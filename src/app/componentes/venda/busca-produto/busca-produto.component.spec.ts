import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BuscaProdutoComponent } from './busca-produto.component';

describe('BuscaProdutoComponent', () => {
  let component: BuscaProdutoComponent;
  let fixture: ComponentFixture<BuscaProdutoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
