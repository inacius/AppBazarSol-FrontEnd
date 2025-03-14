import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MostrarTotalComponent } from './mostrar-total.component';

describe('MostrarTotalComponent', () => {
  let component: MostrarTotalComponent;
  let fixture: ComponentFixture<MostrarTotalComponent>;

  beforeEach(waitForAsync(() => {
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
