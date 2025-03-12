import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelDescontoComponent } from './painel-desconto.component';

describe('PainelDescontoComponent', () => {
  let component: PainelDescontoComponent;
  let fixture: ComponentFixture<PainelDescontoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelDescontoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelDescontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
