import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarFinalizadoComponent } from './snackbar-finalizado.component';

describe('SnackbarFinalizadoComponent', () => {
  let component: SnackbarFinalizadoComponent;
  let fixture: ComponentFixture<SnackbarFinalizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackbarFinalizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbarFinalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
