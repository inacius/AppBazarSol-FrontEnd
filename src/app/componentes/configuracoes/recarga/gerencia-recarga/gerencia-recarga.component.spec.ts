import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GerenciaRecargaComponent } from './gerencia-recarga.component';

describe('GerenciaRecargaComponent', () => {
  let component: GerenciaRecargaComponent;
  let fixture: ComponentFixture<GerenciaRecargaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciaRecargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciaRecargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
