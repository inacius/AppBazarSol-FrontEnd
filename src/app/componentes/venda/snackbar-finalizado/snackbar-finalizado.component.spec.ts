import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SnackbarFinalizadoComponent } from './snackbar-finalizado.component';

describe('SnackbarFinalizadoComponent', () => {
  let component: SnackbarFinalizadoComponent;
  let fixture: ComponentFixture<SnackbarFinalizadoComponent>;

  beforeEach(waitForAsync(() => {
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
