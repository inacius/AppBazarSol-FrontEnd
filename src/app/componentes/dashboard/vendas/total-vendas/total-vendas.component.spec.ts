import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TotalVendasComponent } from './total-vendas.component';

describe('TotalVendasComponent', () => {
  let component: TotalVendasComponent;
  let fixture: ComponentFixture<TotalVendasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalVendasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
