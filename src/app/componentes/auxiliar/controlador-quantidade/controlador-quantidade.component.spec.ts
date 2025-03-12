import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControladorQuantidadeComponent } from './controlador-quantidade.component';

describe('ControladorQuantidadeComponent', () => {
  let component: ControladorQuantidadeComponent;
  let fixture: ComponentFixture<ControladorQuantidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControladorQuantidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControladorQuantidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
