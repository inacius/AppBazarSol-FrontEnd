import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarTotalComponent } from './mostrar-total.component';

describe('MostrarTotalComponent', () => {
  let component: MostrarTotalComponent;
  let fixture: ComponentFixture<MostrarTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
