import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CompraComponent } from './compra.component';

describe('CompraComponent', () => {
  let component: CompraComponent;
  let fixture: ComponentFixture<CompraComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
